import { Transform } from "prosemirror-transform";
export declare type ChangedRange = {
    oldStart: number;
    oldEnd: number;
    newStart: number;
    newEnd: number;
};
/**
 * Returns a list of changed ranges
 * based on the first and last state of all steps.
 */
export default function getChangedRanges(transform: Transform): ChangedRange[];
