//Created an array of numbers 
const arr=[2,4,6,8,10];
  
  /*Used map method to double them and logged the result*/
  const doubleArr = arr.map(n => n*2)
  console.log(doubleArr);
  
  /*Used filter method to keep the result of doubled numbers > 10 and logged the second result*/
  const greaterThanTen = doubleArr.filter(n => n > 10);
  console.log(greaterThanTen);
  
  /*Used reduce method to get the total of the numbers and logged the result*/
  const sumNum = arr.reduce((sum,n)=> sum + n,0)
  console.log(sumNum)