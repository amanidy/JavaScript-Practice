document.addEventListener("DOMContentLoaded", function(){
  
const El = document.getElementById('el');

const words = ["@arnold amani","TechWithArnold"];

let i = 0;

setInterval(()=>{
  
  i = (i + 1) % words.length;
  El.textContent = words[i];
},2000)  
  
  
  
  
})

