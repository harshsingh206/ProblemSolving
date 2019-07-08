function gcd(a, b) 
{   if (b == 0) 
        return a;  
    else
        return gcd(b, a % b); 
} 

function leftRotate(arr, d, n) 
{ 
    var g_c_d = gcd(d, n); 
    for (let i = 0; i < g_c_d; i++) { 
        var temp = arr[i]; 
        var j = i; 
  
        while (1) { 
            var k = j + d; 
            if (k >= n) 
                k = k - n; 
            if (k == i) 
                break; 
            arr[j] = arr[k]; 
            j = k; 
        } 
        arr[j] = temp; 
    } 
} 

var arr = [ 1, 2, 3, 4, 5, 6, 7 ]; 
var n = arr.length; 
leftRotate(arr, 2, n); 
printArray(arr, n); 

function printArray(arr, size) 
{ 
  console.log(arr) 
} 
