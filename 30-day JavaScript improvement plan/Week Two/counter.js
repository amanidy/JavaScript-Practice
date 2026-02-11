function wordFrequency(textInput){o
  let words = textInput.split(" ");
  
  let frequencyObj = {};
  
  for( const word of words){
     frequencyObj[word] =(frequencyObj[word] || 0) + 1;
  }
  
  return frequencyObj;
}