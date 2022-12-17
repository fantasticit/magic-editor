import { Node } from "@tiptap/core";

import { PMPlugin, PMPluginKey } from "../../prosemirror";

import { getAnalyticsFromTransaction } from "./analytics";
import { measureRender } from "./utilities";

export const Perf = Node.create({
  name: "perf",
  group: "perf",
  defining: true,
  isolating: true,
  allowGapCursor: false,
  atom: true,
  content: "",

  addProseMirrorPlugins() {
    return [
      new PMPlugin({
        key: new PMPluginKey(this.name),
        state: {
          init: () => ({}),
          apply: (tr, pluginState) => {
            const analyticsPayloads = getAnalyticsFromTransaction(tr);

            if (analyticsPayloads.length) {
              for (const analyticPayload of analyticsPayloads) {
                if (tr.docChanged) {
                  const measureName = `${analyticPayload.subject}: ${analyticPayload.action}`;
                  measureRender(measureName, duration => {
                    console.log("analytic", measureName, duration);
                  });
                }
              }
            }
            return pluginState;
          }
        }
      })
    ];
  }
});
