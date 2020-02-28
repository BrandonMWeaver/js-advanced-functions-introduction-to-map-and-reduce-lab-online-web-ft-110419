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
