var str = ['i','like','sam','sung','samsung','mobile','ice','cream','icecream','man','go','mango'];
var str1 = 'ilike';

console.log(wordBreak(str1));

function wordBreak(word){
  var n = word.length;
  if (n == 0) 
     return true;
  for(let i=1; i<=n; i++){
    console.log(word.substring(i,n))
    if(str.includes(word.substring(0,i)) && wordBreak(word.substring(i,n)))
      return true; 
    return false;
  }
}