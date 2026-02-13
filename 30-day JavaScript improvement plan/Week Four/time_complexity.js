function timeComplexity() {
  
  
  function nestedLoops(arr,x){
    let counter = 0;
    for(let i = 0;i < arr.length;i++){
      for (var j = i + 1; j < arr.length; j++) {
        
        counter++;
        if(arr[i] + arr[j] === x){
          break;
          
        }
      }
      
    }
    return counter;
  }
  
  
  
  function twoPointers(array,x){
    let counter = 0;
    let i = 0;
    let j = array.length - 1;
    
    while(i< j){
      counter ++;
      
      if(array[i] + array[j] === x){
        break;
      }
      else if(array[i] + array[j] < x ){
        i++;
      } else{
        j--;
      }
    }
    
    return counter;
    
  }
  
  let result1 = nestedLoops([7,2,8,17,9],17)
  let result2 = twoPointers([7,2,8,17,9],17)
  
  return {
    "solution1":result1,
    "solution2":result2,
  }
}


