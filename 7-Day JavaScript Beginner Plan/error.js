/*Created a setTimeout to log message after 2 seconds*/
setTimeout(()=>{
    console.log('You made it to day 6.')
  },2000)
  
  //wrapped it in try/catch
  try{
    /*Created a promise that resolves after 1 second*/
  setTimeout(()=>{
    const promise = Promise.resolve('Tomorrow you hit your seventh day.')
    promise.then((value)=>{
      console.log(value)
    })
  },1000)
  } catch(error){
    console.log('Error occurred while resolving your promise')
  }