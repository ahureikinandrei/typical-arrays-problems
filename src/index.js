
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  return Math.min.apply( Math, array );
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  return Math.max.apply( Math, array );
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  let sumArray = array.reduce( (sum, i) => sum + i );
  let avgArray =  sumArray / array.length;
  return avgArray;

}

