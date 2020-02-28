function mapToNegativize(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1);
  }
  return newArray;
}

function mapToNoChange(array) {
  let newArray = array;
  return newArray;
}
