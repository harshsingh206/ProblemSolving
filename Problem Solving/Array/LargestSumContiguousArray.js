var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(arr));

function maxSubArraySum(a) 
{ 

   var max_so_far = a[0], curr_max = a[0], size = a.length; 
  
   for (let i = 1; i < size; i++) 
   { 
        curr_max = Math.max(a[i], curr_max+a[i]); 
        max_so_far = Math.max(max_so_far, curr_max); 
   } 
   return max_so_far; 
}