function weekThreeCapstone(){
  
  let arr = [];

  
  arr.push(6);
  arr.push(11);
  arr.push(14);
  arr.push(8);
  arr.push(17);
  
  
  
  arr.pop();
  
  
  
  arr.shift();
  
  function recursiveSum(array){
    if(array.length === 0){
      return 0;
    }
    
    return array[0] + recursiveSum(array.slice(1))
  }
  
  let sum = recursiveSum(arr);
  
  return {
    "newArray":arr,
    "sum":sum
  }; 
}

console.log(weekThreeCapstone());

//[11,14,8]
// 33