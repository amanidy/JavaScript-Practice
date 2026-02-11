function pairSum(arr,target){
  let i = 0;
  let j = arr.length - 1;
  
  while(i < j){
    if(arr[i] + arr[j] === target){
      return arr[i],arr[j]
    } else if (arr[i] + arr[j] < target) {
      return i++
      
    } else{
      j--
    }
  }
   return false
}