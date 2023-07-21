export const getOccurrences = (string: string | string[], toCheck: string) => {
  let count = 0;
  for (const letter of string) {
    if (letter.includes(toCheck)) {
      count++;
    }
  }
  return count;
};
