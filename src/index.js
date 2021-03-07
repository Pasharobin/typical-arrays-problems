
exports.min = function min (array) {

  if (!array || (array.length == 0)) {
    return 0;
  }

  array.sort((a, b) => a - b)

  return array[0];
}

exports.max = function max (array) {

  if (!array || (array.length == 0)) {
    return 0;
  }

  array.sort((a, b) => b - a)

  return array[0];
}

exports.avg = function avg (array) {

  if (!array || (array.length == 0)) {
    return 0;
  }

  let sum = 0;
  array.forEach(e => sum += e)

  return sum/array.length
}
