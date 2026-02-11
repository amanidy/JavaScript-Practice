
/*function with arr and window size m*/
function maxSubarray(arr,m){
  
  //Defined the array length 
  const n = arr.length;
  
  
  //Checks the validity of array length 
  if(n < m){
    console.log("Invalid")
    return -1
  }
  
  
  /*computed the sum of the first window */
  let windowSum = 0;
  for(let i = 0; i < m; i++){
    windowSum += arr[i]
  }
  
  
  /*computed the sum of the rest*/
  let maxSum = windowSum;
  for( let i = m; i < n; i++){
    windowSum += arr[i] - arr[i -m]
    maxSum = Math.max(maxSum,windowSum)
    
  }
  return maxSum
}