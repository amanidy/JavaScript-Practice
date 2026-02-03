function createUser(){
  let user ={
    'name':'Katua',
    'age': 19,
    'role':'software developer'
  };
  
  console.log(user.age);
  
  user.role ='Learner';
  
  return user;
}

console.log(createUser());