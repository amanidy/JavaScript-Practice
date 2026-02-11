
//created a function 
function scoreCounter(){
  //that starts with score = 0
  let score = 0;
  /*returns another function that increases the score*/
  return function () {
    score++;
    return score;
  }
}