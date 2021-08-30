// A = [
//   [3, 4, 10],
//   [1, 9, 32],
//   [9, 7, 10],
// ];

// B = [10, 3, 87];

// A = [
//   [1, 2, 3, 4, 5],
//   [2, 5, 0, 9, 8],
//   [8, 0, 8, 3, 4],
//   [2, 3, 1, 2, 3],
//   [3, 5, 4, 6, 0],
// ];

// B = [10, 12, 42, 0, 13];

function combineArrays(a, b) {
  for (let i = 0; i < a.length; i++) {
    a[i].push(b[i]);
  }
  return [...a];
}

function reduceArray(a) {
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

const combined = combineArrays(A, B);
// console.log(combined);
const array = reduceArray(combined);
console.log(
  array.map((arr) => {
    return arr.map((el) => Number(el.toFixed(3)));
  })
);
