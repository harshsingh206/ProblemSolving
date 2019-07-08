function permute(str, l, r) {
    if (l == r) console.log(str);
    else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permute(str, l + 1, r);
        str = swap(str, l, i);
      }
    }
  }
  
  function swap(a, i, j) {
    var temp;
    var charArray = a.split("");
    temp = charArray[j];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
  }
  
  var str = "ABC"; 
  var n = str.length; 
  permute(str, 0, n-1);