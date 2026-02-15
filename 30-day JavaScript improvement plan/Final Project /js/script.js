function createResource() {
  const resources =[
    {
      "id":1,
      "title":"Food",
      "quantity":8,
      "location":"Nyeri",
      "expire_date":"14/02/2026"
    },
    {
      "id":2,
      "title":"Water",
      "quantity":10,
      "location":"Muranga",
      "expire_date":"14/03/2026"
    },
    {
      "id":3,
      "title":"Medicine",
      "quantity":9,
      "location":"Kirinyaga",
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