// Left rotate string s by d (Assuming d <= n)
//leftRotate(s, d)
//reverse(s, 0, d-1); // Reverse substring s[0..d-1]
//reverse(s, d, n-1); // Reverse substring s[d..n-1]
//reverse(s, 0, n-1); // Reverse whole string.  

// Right rotate string s by d (Assuming d <= n)
// rightRotate(s, d)

// We can also call above reverse steps
// with d = n-d.
//leftRotate(s, n-d)

function leftrotate(str, d) 
{ 
            var ans = str.substring(d) + str.substring(0, d); 
            return ans; 
} 
  
function rightrotate(str, d) 
{ 
           return leftrotate(str, str.length - d); 
} 

var str1 = "GeeksforGeeks";  
console.log(leftrotate(str1, 2)); 
  
var str2 = "GeeksforGeeks";  
console.log(rightrotate(str2, 2));