function checkEvenOdd(num){
  let isEven;
  if(num %2 === 0){
    isEven = "Yes";
  } else{
    isEven = "No";
  }
  return isEven;
}

console.log(checkEvenOdd(4));