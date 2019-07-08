var a="durability",b="essence",k=3, str='', m=0, n=0;
for(let i=0,j=0;i<a.length,j<b.length;i=i+k,j=j+k){
    if(i+k > a.length){
      str = str + a.substring(i,a.length);
      m=i;
    }
    else if(i+k < a.length){
      str = str + a.substring(i,k);
      m=i;
    }
    if(j+k > b.length){
      str = str + b.substring(j,b.length);
      n=j;
    }
    else if(j+k < b.length){
      str = str + b.substring(j,k);
      n=j;
    }
   
}
str = str + a.substring(m,a.length) + b.substring(n,b.length);
console.log(str);