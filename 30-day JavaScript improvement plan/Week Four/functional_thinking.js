function mapSimulation(arr, operation){
  
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const transformedValue = operation(arr[i])
    result.push(transformedValue)
  }
  
  return result;
}