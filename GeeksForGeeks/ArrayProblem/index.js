var arr = [1,-1,1,-1,2,0];
var arrn = [-1,-2,-3,-4,-5];

function getContiguousSumSubArray(data){
  var max=0, max_last = 0;

  for(let i=0; i<data.length; i++){
      max_last = max_last + data[i];
      if(max_last < 0){
          max_last = 0;
      }
      else if(max < max_last){
          max = max_last;
      }
  }
  console.log(max_last);
}

// for all negative number
getContiguousSumSubArray(arr);

function getContiguousSumSubArrayNegative(data){
    var max_initial=data[0], max_last = [0];
  
    for(let i=0; i<data.length; i++){
    max_initial = Math.max(data[i], max_initial + data[i]);
       max_last = Math.max(max_last, max_initial);
    }
    console.log(max_last);
}

getContiguousSumSubArrayNegative(arrn);
