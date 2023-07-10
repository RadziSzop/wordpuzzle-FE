export const getSameLetterIndex = (
  string: string | string[],
  letter: string,
  index: number
) => {
  let myIndex = 0;
  for (let i = 0; i <= index; i++) {
    if (string[i] === letter) {
      myIndex++;
    }
  }
  return myIndex;
};
