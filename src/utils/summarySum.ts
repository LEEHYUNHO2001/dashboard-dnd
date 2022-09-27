export const summarySum = (rows: string[][], idx: number) => {
  let sum = 0;
  // eslint-disable-next-line no-return-assign
  rows.forEach(row => (sum += parseInt(row[idx], 10)));
  return sum;
};
