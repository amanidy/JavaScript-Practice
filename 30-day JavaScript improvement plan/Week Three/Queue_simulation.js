function taskQueue(){
  
  const taskArr =[];
  
  taskArr.push("Wake up");
  taskArr.push("Pray");
  taskArr.push("Neat the bed");
  
  taskArr.shift();
  
  return taskArr;
}

console.log(taskArr()); // ["Pray","Neat the bed"]