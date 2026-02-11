// a function accepts an array
function calculateTotal(arr) {
  
  // a variable assigned to 0
  let total=0;
  
  //looped through each element 
  for (let i = 0; i < arr.length; i++) {
    //added current value to total
    total += arr[i]
  }
  //returned total
  return total
}