function reverseArray(arr, start, end) 
    { 
        while (start < end) 
        { 
           var temp = arr[start]; 
           arr[start] = arr[end]; 
           arr[end] = temp; 
           start++; 
           end--; 
         } 
    } 

   function rightRotate(arr, d, n) 
    { 
       reverseArray(arr, 0, n - 1); 
       reverseArray(arr, 0, d - 1); 
       reverseArray(arr, d, n - 1); 
    } 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var n = arr.length; 
var k = 3; 
      
rightRotate(arr, k, n); 
console.log(arr);

  