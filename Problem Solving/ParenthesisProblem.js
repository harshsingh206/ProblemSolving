var str = '[()]{}{[()()]()}';

var arr= [];

for(let i=0; i<str.length; i++){
  if(str[i] === '[' || str[i] === '(' || str[i] === '{'){
    arr.push(str[i]);
  }
  else if (str[i] === ']' || str[i] === ')' || str[i] === '}'){
    arr.pop();
  }
}

for(let i=0; i<str.length; i++){
  if(str[i] === '[' || str[i] === '(' || str[i] === '{'){
    arr.push(str[i]);
  }
  else if (str[i] === ']' && arr[arr.length-1] === '[' ){
    arr.pop();
  }
  else if (str[i] === '}' && arr[arr.length-1] === '{' ){
    arr.pop();
  }
  else if (str[i] === ')' && arr[arr.length-1] === '(' ){
    arr.pop();
  }
}

if(arr.length === 0){
    console.log(true);
}