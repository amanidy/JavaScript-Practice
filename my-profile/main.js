document.addEventListener("DOMContentLoaded", function(){
  
const El = document.getElementById('el');

const words = ["@arnold amani","TechWithArnold"];

let i = 0;

setInterval(()=>{
  
  i = (i + 1) % words.length;
  El.textContent = words[i];
},2000)  
  
  /*Selected form elements and stored them in their respective variables */
  const formEl = document.getElementById('form-el');
  const nameEl = document.getElementById('name-el');
  const emailEl = document.getElementById('email-el');
  const subjectEl = document.getElementById('subject-el');
  const messageEl = document.getElementById('message-el');
  const feedbackEl = document.getElementById('feedback-el');
  
  /*Receiving a value & returning true if it's empty after trimming spaces*/
  function isEmpty(value){
    return value.trim() === '';
  }
  
  
  /*Receiving an email string and checking it's structure*/
  function isValidEmail(email){
    return email.includes('@') && email.includes('.')
  }
  
  function showError(message){
    feedbackEl.textContent = message;
    feedbackEl.style.color = 'red'
  }
  
  function showSuccess(message){
    feedbackEl.textContent = message;
    feedbackEl.style.color = 'green'
  }
  
  
  
  /*Attached a submit event listener to the form */
  formEl.addEventListener('submit',function(e){
    
    /*Preventing browser's default submit behavior */
    e.preventDefault();
    
    /*Capturing and storing form inputs*/
    const nameValue = nameEl.value;
    const emailValue = emailEl.value;
    const subjectValue = subjectEl.value;
    const messageValue = messageEl.value;
    
    
    //Checking if inputs are empty
    if(
      isEmpty(nameValue) ||
      isEmpty(emailValue) ||
      isEmpty(subjectValue) ||
      isEmpty(messageValue)
    ){
      showError('Please provide all the fields.')
      return;
    }
    
    if(
      !isValidEmail(emailValue)
    ){
      showError('Please provide a valid email.')
      return;
    }
    
    showSuccess("Message was submitted successful.");
    
    formEl.reset();
  })
  
  
  
})

