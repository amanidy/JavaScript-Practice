//created an object
const data ={
    'name':'felix',
    'age':19,
    'location':'nyeri'
  }
  
  //converted it to JSON
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  
  //converted it back to object
  const rawObject= JSON.parse(jsonData);
  console.log(rawObject);