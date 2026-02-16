function memoryTracker(n){
  let strorage = [];
  
  for(let i=0;i<n;i++){
    storage.push("items" + i)
  }
  
  let usedMemory = storage.length;
  
  for(let i =0;i<Math.floor(n/2);i++){
    storage.pop();
  }
  
  let remainingMemory = storage.length;
  
  return {
    usedMemory,
    remainingMemory
  }
}