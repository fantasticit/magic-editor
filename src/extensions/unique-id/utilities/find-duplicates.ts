import removeDuplicates from "./remove-duplicates";

/**
 * Returns a list of duplicated items within an array.
 */
export default function findDuplicates(items: any[]): any[] {
  const filtered = items.filter((el, index) => items.indexOf(el) !== index);
  const duplicates = removeDuplicates(filtered);

  return duplicates;
}
