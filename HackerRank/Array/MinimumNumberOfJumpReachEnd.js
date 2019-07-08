function minJumps(arr, l, h) {
  // Base case: when source
  // and destination are same
  if (h == l) return 0;

  // When nothing is reachable
  // from the given source
  if (arr[l] == 0) return Number.MAX_VALUE;

  // Traverse through all the points
  // reachable from arr[l]. Recursively
  // get the minimum number of jumps
  // needed to reach arr[h] from these
  // reachable points.
  var min = Number.MAX_VALUE;
  for (let i = l + 1; i <= h && i <= l + arr[l]; i++) {
    var jumps = minJumps(arr, i, h);
    if (jumps != Number.MAX_VALUE && jumps + 1 < min) min = jumps + 1;
  }
  return min;
}

var arr = [1, 3, 6, 3, 2, 3, 6, 8, 9, 5];
var n = arr.length;
console.log(
  "Minimum number of jumps to reach end is " + minJumps(arr, 0, n - 1)
);
