function statsEngine(arr){
  let total = 0;
  let max = arr[0];
  let min = arr[0];
  
  for(let i = 0; i < arr.length;i++){
    total += arr[i];
  }
  
  let average = total / arr.length;
  
  for(let i = 0 + 1; i < arr.length;i++){
    if(max < arr[i]){
      max = arr[i];
    }
    
    if( min > arr[i])
    min = arr[i]
  }
  
  return {
    "Total": total,
    "Average": average,
    "Max": max,
    "Min": min,
  }
  
}