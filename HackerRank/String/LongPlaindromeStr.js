var str1 = "geeksskeeg";
console.log(longestPalSubstr(str1));

function longestPalSubstr(str) {
  var start = 0,
    maxLength = 1,
    len = str.length,
    low,
    high;

  for (let i = 1; i < len; ++i) {
    low = i - 1;
    high = i;
    while (low >= 0 && high < len && str[low] === str[high]) {
      if (high - low + 1 > maxLength) {
        start = low;
        maxLength = high - low + 1;
      }
      --low;
      ++high;
    }

    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < len && str[low] === str[high]) {
      if (high - low + 1 > maxLength) {
        start = low;
        maxLength = high - low + 1;
      }
      --low;
      ++high;
    }
  }

  var newStr = str.substring(start, start + maxLength);
  return newStr;
}
