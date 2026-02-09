function manualSort(arr) {
  let x;
  
  for(let i = 0;i < arr.length; i++){
    for(let j = i + 1; j< arr.length;j++){
      if(arr[i] > arr[j]){
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr
}

console.log(manualSort([4,3,2,1]));