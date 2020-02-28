function mapToNegativize(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * -1);
  }
  return newArray;
}

function mapToNoChange(array) {
  let newArray = array;
  return newArray;
}

function mapToDouble(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * 2);
  }
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  for (const element of array) {
    newArray.push(element * element);
  }
  return newArray;
}

function reduceToTotal(array, start = 0) {
  let total = start;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}