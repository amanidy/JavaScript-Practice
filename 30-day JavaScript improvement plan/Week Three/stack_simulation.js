function undoSystem(){
  
  //created an empty stack array
  const stackArr = [];
  
  //pushed actions into stack
  stackArr.push("Jomo");
  stackArr.push("Kenyatta");
  stackArr.push("Muigai");
  
  //popped the last action to undo
  stackArr.pop();
  
  
  //returned current state
  return stackArr;
}

console.log(undoSystem()); // ["Jomo","Kenyatta"]