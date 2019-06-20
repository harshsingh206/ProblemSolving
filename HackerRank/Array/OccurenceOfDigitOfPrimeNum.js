function isPrime(n){
    var divisor = 2;
    while (n > divisor){
      if(n % divisor == 0){
       return false; 
      }
      else
        divisor++;
    }
    return true;
  }
  var arr = [], obj={};
  for(let i=0; i<20; i++){
    if(i>3 && isPrime(i)){
      arr.push(i);
    }
  }
  for(let i=0; i< arr.length; i++){
      while(arr[i]>0){
        var val;
        arr[i] = parseInt(arr[i]);
        val = arr[i] %10;
        arr[i] = arr[i] / 10;
        if(obj[val] && val > 0){
          obj[val] = parseInt(obj[val]) + 1;
        }
        else if(val > 0){
          obj[val] = 1;
        }
      }
  }
  var maxValue=0, maxKey=0;
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if(maxValue < obj[key]){
          maxValue = obj[key];
          maxKey = key;
        }
      }
  }
  
  console.log(`Occurence of digit is max of number ${parseInt(maxKey)} which is occuring ${maxValue} times`);
  
  