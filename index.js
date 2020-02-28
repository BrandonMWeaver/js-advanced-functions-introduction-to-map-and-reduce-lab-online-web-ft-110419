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

function reduceToTotal(array, start) {
  let total = 0;
  for (let i = start; i < array.length - start; i++) {
    total += array[i];
  }
  return total;
}