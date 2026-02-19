function paginateArray(arr,size) {
  const results= [];
  
  for (let i = 0; i < arr.length; i+=size) {
    results.push(arr.slice(i,i+size))
  }
  return results;
}