function createResource() {
  const resources =[
    {
      "id":1,
      "title":"Food",
      "quantity":8,
      "location":"Nyeri",
      "severity_score": 2,
      "expire_date":"14/02/2026"
    },
    {
      "id":2,
      "title":"Water",
      "quantity":10,
      "location":"Muranga",
       "severity_score": 5,
      "expire_date":"14/03/2026"
    },
    {
      "id":3,
      "title":"Medicine",
      "quantity":9,
      "location":"Kirinyaga",
       "severity_score": 7,
      "expire_date":"14/04/2026"
    }
  ];
  
  addResource(resources,4,"Clothes",1000,"Nairobi",9,"14/05/2026");
  const result = priorityAreas(resources);
  
  return {
    "allResources":resources,
    "highPriorityAreas":result
  };
}

m 
function addResource(resources,id,title, quantity,location,severity_score,expiry_date){
  
  
  
  resources.push({
    "id":id,
    "title":title,
    "quantity":quantity,
    "location": location,
    "severity_score":severity_score,
    "expiry_date":expiry_date
  })
  
  return resources;
  
}

function priorityAreas(resources){
  const highPrioritylocations = [];
  const threshold = 3;
  
  for(let i = 0;i<resources.length;i++){
    if(resources[i].severity_score> threshold){
      highPrioritylocations.push(resources[i].location);
    }
    
    
  }
  
  return highPrioritylocations;
  
  
}