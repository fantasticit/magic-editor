import { Node as PMNode } from "prosemirror-model";
import {
  Step,
  StepResult,
  StepMap,
  ReplaceStep,
  Mappable
} from "prosemirror-transform";
import { Slice } from "prosemirror-model";
import { Transaction } from "../../prosemirror";

export const analyticsStepType = "magic-editor-analytics";

export interface AnalyticsPayload {
  subject: string;
  action: string;
  attrs?: Record<string, unknown>;
}

export class AnalyticsStep extends Step {
  payloads: AnalyticsPayload[];
  pos?: number;

  constructor(payloads: AnalyticsPayload[], pos?: number) {
    super();
    this.payloads = payloads;
    this.pos = pos;
  }

  invert() {
    return new AnalyticsStep(this.payloads);
  }

  apply(doc: PMNode) {
    return StepResult.ok(doc);
  }

  map(mapping: Mappable) {
    let newPos = this.pos;
    if (typeof newPos === "number") {
      newPos = mapping.map(newPos);
    }

    return new AnalyticsStep(this.payloads, newPos);
  }

  getMap() {
    if (typeof this.pos === "number") {
      return new StepMap([this.pos, 0, 0]);
    }
    return new StepMap([]);
  }

  merge(other: Step) {
    if (other instanceof AnalyticsStep) {
      return new AnalyticsStep([...other.payloads, ...this.payloads]);
    }
    return null;
  }

  toJSON() {
    return {
      stepType: analyticsStepType
    };
  }

  static fromJSON() {
    return new ReplaceStep(0, 0, Slice.empty);
  }
}

Step.jsonID(analyticsStepType, AnalyticsStep);

export function getAnalyticsFromTransaction(tr: Transaction) {
  return (tr.steps as Step[])
    .filter(
      (step: Step): step is AnalyticsStep => step instanceof AnalyticsStep
    )
    .reduce<AnalyticsPayload[]>((acc, step) => [...acc, ...step.payloads], []);
}

export function addAnalytics(
  tr: Transaction,
  payload: AnalyticsPayload
): Transaction {
  const { storedMarks } = tr;
  tr.step(new AnalyticsStep([payload], tr.selection.$from.pos));

  if (storedMarks) {
    tr.setStoredMarks(storedMarks);
  }

  return tr;
}
