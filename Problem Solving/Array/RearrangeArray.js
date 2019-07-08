function rearrangeArray(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i] >= 0 && arr[i] != i) {
      var ele = arr[arr[i]];
      arr[arr[i]] = arr[i];
      arr[i] = ele;
    } else {
      i++;
    }
  }
  console.log(arr);
}
var arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
rearrangeArray(arr);
