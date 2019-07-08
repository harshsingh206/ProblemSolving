var permuteArray = [];
function swap(str, firstChar, secondChar) {
  var temp = str[firstChar];
  str[firstChar] = str[secondChar];
  str[secondChar] = temp;
  return str;
}
function permute(a, sIndex, eIndex) {
  if (sIndex == eIndex) {
    permuteArray.push(a.join(""));
  } else {
    for (var i = sIndex; i < eIndex + 1; i++) {
      a = swap(a, sIndex, i);
      permute(a, sIndex + 1, eIndex);
      a = swap(a, i, sIndex);
    }
  }
}
function isPalindrome(inputString) {
  if (
    inputString ===
    inputString
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
}
function getDistinctPalindromes(inputArray) {
  var x,
    subString,
    distPali = [];
  for (x in inputArray) {
    //make different sub strings and check if it is palindrome or not
    for (var i = 0; i < inputArray[x].length; i++) {
      for (var j = i + 2; j <= inputArray[x].length; j++) {
        subString = inputArray[x].slice(i, j);
        if (isPalindrome(subString) && !distPali.includes(subString)) {
          distPali.push(subString);
        }
      }
    }
  }
  return distPali;
}
str = "abab";
str = str.split("");
var startIndex = 0;
var endIndex = str.length - 1;
permute(str, startIndex, endIndex);
console.log(getDistinctPalindromes(permuteArray));
