//Order processor

function processOrder(orderItems){
  
  let subtotal = 0;
  let isValid = true;
  let receipt ='---RECEIPT---\n';
  
  orderItems.forEach(item =>{
    
    if (!item || item.quantity <=0) {
      console.log(`Invalid process order for:${item.id}`);
      isValid = true;
    }
    const itemTotal = Number(item.price) * item.quantity;
    
    subtotal += itemTotal;
    receipt +=`${item.name} x${item.quantity}:$${itemTotal.toFixed(2)} \n`
  });
  
  if(!isValid) return 'Order processor failed';
  
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  receipt += `----------------\nSubtotal: $${subtotal.toFixed(2)}\n`;
    receipt += `Tax (10%): $${tax.toFixed(2)}\n`;
    receipt += `Total: $${total.toFixed(2)}`;
    
    return receipt;
}