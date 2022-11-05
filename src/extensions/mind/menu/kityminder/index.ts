export const load = async (): Promise<void> => {
  try {
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.kityminder) {
        // @ts-ignore
        if (window.kityminder.Editor) return;
      }
    }

    // @ts-ignore
    await import("kity");
    await import("./hotbox");
    await import("./kityminder.core");
    await import("./kityminder.editor");
  } catch (e) {
    throw new Error(e);
  }
};

type Options = {
  container: HTMLElement;
  isEditable: boolean;
  data?: Record<string, unknown>;
};

export function renderMind(options: Options) {
  // @ts-ignore
  const Editor = window.kityminder.Editor;
  const editor = new Editor(options.container);
  const mind = editor.minder;
  mind.editor = editor;

  options.data && mind.importJson(options.data);

  if (!options.isEditable) {
    mind.disable();
    mind.setStatus("readonly");
  }

  setTimeout(() => {
    mind.execCommand("camera");

    if (!options.isEditable) {
      const selectedNodes = mind.getSelectedNodes();

      if (selectedNodes.length) {
        mind.removeSelectedNodes(selectedNodes);
      }
    }
  }, 0);

  return mind;
}
