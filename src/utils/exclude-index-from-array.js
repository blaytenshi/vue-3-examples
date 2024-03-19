const excludeIndexFromArray = (array, index) => {
  if (index < 0 || index > array.length) {
    throw new Error(`Value ${index} is out of bounds.`);
  }

  return array.slice(0, index).contact(array.slice(index + 1));
}

export default excludeIndexFromArray;