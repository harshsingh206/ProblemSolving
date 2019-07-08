var str = 'I like this program very much', arr=[], k=0,i=0, str1='';
for(i=0; i<str.length; i++){
	if(str[i] === ' ' ){
      if(k === i-1){
        arr.push(str.substring(k, i));
      }
      else{
        arr.push(str.substring(k+1, i));
      }
      k=i;
    }
}
arr.push(str.substring(k+1, str.length));
for(let i=arr.length-1; i>=0;i--){
	str1 = str1 + arr[i] + ' ';
}
console.log(str1);