export const merge = (
  collection1: number[],
  collection2: number[]
): number[] => {
  const merged: number[] = new Array(collection1.length + collection2.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] <= collection2[j]) {
      merged[k] = collection1[i];
      i++;
    } else {
      merged[k] = collection2[j];
      j++;
    }
    k++;
  }

  while (i < collection1.length) {
    merged[k] = collection1[i];
    i++;
    k++;
  }

  while (j < collection2.length) {
    merged[k] = collection2[j];
    j++;
    k++;
  }

  return merged;
};
