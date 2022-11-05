import removeDuplicates from "./remove-duplicates";

export interface ArrayDifference {
  added: any[];
  removed: any[];
  common: any[];
}

/**
 * Checks for added, removed and common items between two arrays.
 */
export default function arrayDifference(
  array1: any[],
  array2: any[]
): ArrayDifference {
  const uniqueCombinedArray = removeDuplicates([...array1, ...array2]);
  const data: ArrayDifference = {
    added: [],
    removed: [],
    common: []
  };

  uniqueCombinedArray.forEach(item => {
    if (!array1.includes(item) && array2.includes(item)) {
      data.added.push(item);
    }

    if (array1.includes(item) && !array2.includes(item)) {
      data.removed.push(item);
    }

    if (array1.includes(item) && array2.includes(item)) {
      data.common.push(item);
    }
  });

  return data;
}
