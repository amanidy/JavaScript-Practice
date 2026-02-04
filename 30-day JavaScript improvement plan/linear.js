function linearSearch(arr,num){
  for(let i = 0;i < arr.length;i++){
    if(arr[i] === num){
      return i;
    }
  }
  return "not found";
}

console.log(linearSearch([1,3,4,7],7)); //3