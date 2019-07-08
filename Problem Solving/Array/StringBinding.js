var str1 = 'harsh';
String.prototype.checkString = function(){
   var a = this;
   a = a.replace("h", "H");
  return a;
}
console.log(str1.checkString());