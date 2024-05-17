// stuff I don't want to repeat

export const ArrayFrom = (length: number) => Array.from({ length }).fill(0) as number[];

export const randomFromArray = <T>(array: T[], amount: number): T[] => {
  const bufferArray = [...array];
  const randomArray: T[] = [];

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * bufferArray.length);
    randomArray.push(bufferArray.splice(randomIndex, 1)[0]);
  }

  return randomArray;
};
