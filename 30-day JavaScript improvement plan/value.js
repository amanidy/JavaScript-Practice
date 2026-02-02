function findMaxValue(arr){
  //the first array value is max
  let max = arr[0];
  
  //looped through the remaining values
  for(let i = 0 + 1; i < arr.length;i++){
    
    //compared current with max
    if(max < arr[i]){
      
      //replaced max if current is larger
      max = arr[i]
    }
  }
  
  //returned max value
  return max;
}

console.log(findMaxValue([5,3,6,14,7]));// 14