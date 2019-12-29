/* eslint-disable no-param-reassign */
const swap = (matrix, x1, y1, x2, y2) => {
  const temp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = temp;
};

const rotate = (matrix) => {
  const row = matrix.length;
  const column = matrix[0].length;
  if (row === 0) {
    return;
  }
  // swap Diagonaly
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column - i; j += 1) {
      swap(matrix, i, j, row - 1 - j, column - 1 - i);
    }
  }
  // swap in middle
  for (let i = 0; i < Math.floor(row / 2); i += 1) {
    for (let j = 0; j < column; j += 1) {
      swap(matrix, i, j, row - 1 - i, j);
    }
  }
  // eslint-disable-next-line consistent-return
  return matrix;
};
export { rotate };
