function recursiveSum(arr){
  let firstElement = arr[0];
  
  if(arr.length == 1){
    return firstElement;
  } 
  
  let restOfArray = arr.slice(1);
  
  return firstElement + recursiveSum(restOfArray);
}

console.log(recursiveSum([1,2,3]));//6