//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

const searchSubString = (puzzle, word) => {
  const numRows = puzzle.length;
  const numCols = puzzle[0].length;
  // horizontal
  for (let row = 0; row < numRows; row++) {
    const rowWord = puzzle[row].join('');
    if (rowWord.includes(word) || rowWord.split('').reverse().join('').includes(word)) {
      return true;
    }
  }
  // vertical
  for (let col = 0; col < numCols; col++) {
    const colWord = puzzle.map((row) => row[col]).join('');
    if (colWord.includes(word) || colWord.split('').reverse().join('').includes(word)) {
      return true;
    }
  }
  // diagonal to the left bottom
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let diagonalWord = '';
      for (let i = 0; row + i < numRows && col + i < numCols; i++) {
        diagonalWord += puzzle[row + i][col + i];
      }
      if (diagonalWord.includes(word) || diagonalWord.split('').reverse().join('').includes(word)) {
        return true;
      }
    }
  }
  // diagonal to the upper right
  for (let row = numRows - 1; row >= 0; row--) {
    for (let col = 0; col < numCols; col++) {
      let diagonalWord = '';
      for (let i = 0; row - i >= 0 && col + i < numCols; i++) {
        diagonalWord += puzzle[row - i][col + i];
      }
      if (diagonalWord.includes(word) || diagonalWord.split('').reverse().join('').includes(word)) {
        return true;
      }
    }
  }
  return false;
};

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
console.log(searchSubString(examplePuzzle, "like")) // true
console.log(searchSubString(examplePuzzle, "gold")) // true
console.log(searchSubString(examplePuzzle, "bibus")) // false
console.log(searchSubString(examplePuzzle, "queen")) // true
// Level 2
console.log(searchSubString(examplePuzzle, "cake")) // true
