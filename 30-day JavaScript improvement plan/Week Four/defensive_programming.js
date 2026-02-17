function inputValidator(input){
  if(typeof input !== number && !Array.isArray(input)){
    
    return "The input does not meet the requirements"
  }
return {message:"The input meets requirements",
  result:Array.isArray(input)?"array":typeof input
};

}