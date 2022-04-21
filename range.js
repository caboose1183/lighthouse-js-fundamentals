function range (start, end, step) {
  let endArray = [];

  if (start === undefined || end === undefined || step === undefined) {
    return endArray;
  } else if (start > end) {
    return endArray;
  } else if (step <= 0) {
    return endArray
  } else {
    let i = start;

    for (i = start; i < end + 1; i += step) {
      endArray.push (i);
    }
    return endArray;
  }
}

console.log (range (20,10,-2));