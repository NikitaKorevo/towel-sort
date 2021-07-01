
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) return arr;

  for (let i = 0; i < matrix.length; i++) {

    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    }

    if (i % 2 !== 0) {
      for (let r = matrix[i].length - 1; r >= 0; r--) {
        arr.push(matrix[i][r]);
      }
    }
  }
  return arr;
}
