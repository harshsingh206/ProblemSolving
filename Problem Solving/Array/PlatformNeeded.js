function sortNumber(a, b) {
  return a - b;
}
var arr = [900, 940, 950, 1100, 1500, 1800];
var dep = [910, 1200, 1120, 1130, 1900, 2000];

arr = arr.sort(sortNumber);
dep = dep.sort(sortNumber);
var plat_needed = 1,
  result = 1,
  i = 0,
  j = 0;

while (i < arr.length && j < dep.length) {
  if (arr[i] <= dep[j]) {
    plat_needed++;
    i++;
    if (plat_needed > result) result = plat_needed;
  } else {
    plat_needed--;
    j++;
  }
}

console.log(plat_needed);
