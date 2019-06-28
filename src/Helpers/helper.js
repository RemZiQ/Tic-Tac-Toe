export function createMatrix() {
  const storage = window.sessionStorage;
  if (!storage.matrix) {
    const matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
    storage.setItem('matrix', JSON.stringify(matrix));
  }
}

export function updateMatrix(id, order) {
  // param id must be in order of matrix, for example:
  // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  // param order needed for undestanding players order

  // needed for support updating count of rows, for example 4 * 4 or 5 * 5
  const countOfrows = 3;
  if (id > countOfrows * countOfrows) {
    throw new Error('Wrong id! ID can`t be more than count of cells');
  }
  const storage = window.sessionStorage;
  const matrix = JSON.parse(storage.matrix);
  const row = Math.ceil(+id / countOfrows);
  const cell = id - countOfrows * (row - 1);
  if (order === 1) {
    matrix[row - 1][cell - 1] = 1;
  } else {
    matrix[row - 1][cell - 1] = 2;
  }
  storage.setItem('matrix', JSON.stringify(matrix));
}

export function checkWinner() {
  const storage = window.sessionStorage;
  const matrix = JSON.parse(storage.matrix);
  const { length } = matrix;

  // check rows
  for (let i = 0; i < length; i += 1) {
    if (matrix[i].includes(0)) {
      if (matrix[i].every((elem, index, arr) => arr[0] === elem)) {
        return matrix[i][0];
      }
    }
  }

  // check columns
  for (let i = 0; i < length; i += 1) {
    const currentColumn = matrix.map(elem => elem[i]);
    if (currentColumn.includes(0)) {
      if (currentColumn.every((elem, index, arr) => arr[0] === elem)) {
        return currentColumn[0];
      }
    }
  }

  // check diagonals
  const firstDiagonal = matrix.map((elem, index) => elem[index]);
  const secondDiagonal = matrix.map((elem, index, arr) => elem[arr.length - index - 1]);
  if (!firstDiagonal.includes(0)) {
    if (firstDiagonal.every((elem, index, arr) => arr[0] === elem)) {
      return firstDiagonal[0];
    }
  }
  if (!secondDiagonal.includes(0)) {
    if (secondDiagonal.every((elem, index, arr) => arr[0] === elem)) {
      return secondDiagonal[0];
    }
  }
  return false;
}

export function idMaker() {
  let count = 0;
  return function counterMaker() {
    count += 1;
    return count;
  };
}
