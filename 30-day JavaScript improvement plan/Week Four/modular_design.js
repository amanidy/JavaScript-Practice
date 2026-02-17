function calculator(){
  
  function add(a,b) {
    return a + b;
  }
  
  function subtraction(a,b) {
    return a - b;
  }
  
  function multiplication(a,b) {
    return a * b;
  }
  
  function division(a,b) {
    return a / b;
  }
  
  return {
    "additionResult": add(4,3),
    "subtractionResult": subtraction(11,7),
    "multiplicationResult": multiplication(4,3),
    "divisionResult": division(141,3),
  }
  
}