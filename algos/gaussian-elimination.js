// A = [
//   [3, 4, 10],
//   [1, 9, 32],
//   [9, 7, 10],
// ];

// X = ["x", "y", "z"];

// B = [10, 3, 87];

A = [
  [1, 2, 3, 4, 5],
  [2, 5, 0, 9, 8],
  [8, 0, 8, 3, 4],
  [2, 3, 1, 2, 3],
  [3, 5, 4, 6, 0],
];

X = ["X1", "X2", "X3", "X4", "X5"];

B = [10, 12, 42, 0, 13];

function combineArrays(a, b) {
  for (let i = 0; i < a.length; i++) {
    a[i].push(b[i]);
  }
  return [...a];
}

function reduceArray(a) {
  function multiplyBaseArray(a, j, mutator) {
    for (let i = 0; i < a[0].length; i++) {
      a[j][i] *= mutator;
    }
    return [...a];
  }

  function addArrays(a, i, j) {
    for (let k = 0; k < a[0].length; k++) {
      a[i][k] += a[j][k];
    }
    return [...a];
  }

  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      const multiplier = -1 * (a[i][j] / a[j][j]);
      a = multiplyBaseArray(a, j, multiplier);
      a = addArrays(a, i, j);
    }
  }

  for (let i = 0; i < a.length; i++) {
    const multiplier = 1 / a[i][i];
    a = multiplyBaseArray(a, i, multiplier);
  }
  return [...a];
}

function separateArray(a) {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i][a[i].length - 1]);
    a[i] = a[i].slice(0, a[i].length - 1);
  }
  return [a, b];
}

function solveSystem(a, b) {
  console.log(a);
  console.log(b);
  const solved = {};
  solved[X[X.length - 1]] = b[b.length - 1];

  for (let i = a.length - 2; i > -1; i--) {
    let sum = 0;
    for (let j = a.length - 1; j > i; j--) {
      sum += solved[X[j]] * a[i][j];
    }
    solved[X[i]] = b[i] - sum;
  }
  return solved;
}

function solve(A, B) {
  const combined = combineArrays(A, B);
  const rowEchelon = reduceArray(combined);
  const [a, b] = separateArray(rowEchelon);
  const solved = solveSystem(a, b);
  return solved;
}

// const combined = combineArrays(A, B);
// // console.log(combined);
// const array = reduceArray(combined);
const solved = solve(A, B);
console.log("SOLVED: ", solved);

// console.log(
//   array.map((arr) => {
//     return arr.map((el) => Number(el.toFixed(3)));
//   })
// );

// const sepRE = separateArray(array);
// console.log(sepRE);
