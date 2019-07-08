function rearrangePositiveAndNegative(arr, n) 
{ 
    // The following few lines are similar to partition 
    // process of QuickSort.  The idea is to consider 0 
    // as pivot and divide the array around it. 
    var i = -1, temp = 0; 
    for (let j = 0; j < n; j++) 
    { 
        if (arr[j] < 0) 
        { 
            i++; 
            temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 
        } 
    } 

    // Now all positive numbers are at end and negative numbers at 
    // the beginning of array. Initialize indexes for starting point 
    // of positive and negative numbers to be swapped 
    var pos = i+1, neg = 0; 

    // Increment the negative index by 2 and positive index by 1, i.e., 
    // swap every alternate negative number with next positive number 
    while (pos < n && neg < pos && arr[neg] < 0) 
    { 
        temp = arr[neg]; 
        arr[neg] = arr[pos]; 
        arr[pos] = temp; 
        pos++; 
        neg += 2; 
    } 
} 

var arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9, -19, -11]; 
var n = arr.length; 
rearrangePositiveAndNegative(arr,n); 
console.log("Array after rearranging: " + arr); 
