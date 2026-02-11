function gradeCheck(score){
  let result;
  if(score < 0 || score > 100){
    result = 'Invalid';
  } else if( score >= 50){
    result ='Pass';
  } else{
    result ='Fail';
  }
     return result;
}

console.log(gradeCheck(67)); //Pass