/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/
/* 
the calculateCartTotal will take in 'cart' and return a total price, in cents, of everything in it

*/

function calculateCartTotal(cart) {
  let grandTotal = 0;
       for (const prop in cart) {
          let quantity = Object.values(cart[prop])[0];
          let price = Object.values(cart[prop])[1];
          grandTotal += quantity * price;
       }
   return grandTotal;
   
 }
 
 function printCartInventory(cart) {
    let inventory = "";
       for (const prop in cart) {
          inventory += `${Object.values(cart[prop])[0]}x${prop}\n`
       }
   return inventory;
 }

 
module.exports = {
  calculateCartTotal,
  printCartInventory,
};


