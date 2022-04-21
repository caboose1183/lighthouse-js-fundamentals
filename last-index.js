function lastIndexOf (array, num) {

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === num) {
      return i
    }
  }
  return -1
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 5), "=?", 5);