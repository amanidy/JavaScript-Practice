function textAnalyzer(input){
  let words = input.split(" ");
  let characters = input.split("");
  
  
  let frequentWord = {};
  let frequentCharacter = {};
  
  for(const word of words){
    frequentWord[word] = (frequentWord[word] || 0) + 1
  }
  
  let maxWordCount = 0;
  let mostFrequentWord;
  
  for(const word in frequentWord){
    if(frequentWord[word] > maxWordCount){
      maxWordCount = frequentWord[word]
      mostFrequentWord = word;
    }
  }
  
  
  
  for(const character of characters){
    frequentCharacter[character] = (frequentCharacter[character] || 0) + 1
  }
  
  let maxCharacterCount = 0;
  let mostFrequentCharacter;
  
  for(const char in frequentCharacter){
    if(frequentCharacter[char] > maxCharacterCount){
      maxCharacterCount = frequentCharacter[char]
      mostFrequentCharacter = char;
    }
  }
  
  
  
  return {
    "Frequent Word":mostFrequentWord,
    "Frequent Character": mostFrequentCharacter,
    "Words Frequency": frequentWord,
    "Charcters Frequency": frequentCharacter
  };
}