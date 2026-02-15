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
  
  addResource(resources,4,"Clothes",1000,"Nairobi","14/05/2026")
  
  return resources;
}


function addResource(resources,id,title, quantity,location,expiry_date){
  
  
  
  resources.push({
    "id":id,
    "title":title,
    "quantity":quantity,
    "location": location,
    "expiry_date":expiry_date
  })
  
  return resources;
  
}

function priorityAreas(locations){
  const highPrioritylocations = [];
  const threshold = 3;
  
  for(let i = 0;i<locations.length;i++){
    if(locations[i].severity_score> threshold){
      highPrioritylocations.push(locations[i]);
    }
    
    
  }
  
  return highPrioritylocations;
  
  
}