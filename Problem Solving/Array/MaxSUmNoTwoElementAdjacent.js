var arr = [5, 5, 10, 100, 10, 5];
console.log(FindMaxSum(arr))

function FindMaxSum(arr) 
    { 
        var incl = arr[0], excl = 0, excl_new,i, n=arr.length; 
  
        for (i = 1; i < n; i++) 
        {   excl_new = (incl > excl) ? incl : excl; 
            incl = excl + arr[i]; 
            excl = excl_new; 
        } 
        return ((incl > excl) ? incl : excl); 
}