export interface ArrayDifference {
    added: any[];
    removed: any[];
    common: any[];
}
/**
 * Checks for added, removed and common items between two arrays.
 */
export default function arrayDifference(array1: any[], array2: any[]): ArrayDifference;
