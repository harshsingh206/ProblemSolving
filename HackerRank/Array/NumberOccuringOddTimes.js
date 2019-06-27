var arr= [3,4,5,3,4,5,3,5,5], obj={};

for(let i=0; i<arr.length;i++){
	if(obj[arr[i]]){
     obj[arr[i]] = obj[arr[i]] + 1;
    }
  else{
  obj[arr[i]] = 1;
  }
}
Object.keys(obj).forEach(function(key) {
  if(obj[key] % 2 === 1){
  console.log(key)
 }
});