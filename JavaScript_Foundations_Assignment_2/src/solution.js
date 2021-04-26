/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let outPut = null;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name && product.availableSizes.includes(size)) {
      outPut = product;
    }
  }
  return outPut;
}

function addProductToCart({ name, priceInCents }, cart = {}) {
  const outPut = cart[name];
  if (outPut) {
    outPut.quantity++;
  } else {
    cart[name] = { priceInCents, quantity: 1 };
  }
  return cart;
}

function calculateTotal(cart) {
  let outPut = 0;
  for (let name in cart) {
    const item = cart[name];
    outPut += item.quantity * item.priceInCents;
  }
  return outPut;
}

function printReceipt(cart) {
  const total = calculateTotal(cart);
  if (!total) return null;

  let outPut = "";
  for (let name in cart) {
    const { quantity, priceInCents } = cart[name];
    const amount = printablePrice(quantity * priceInCents);
    outPut += `${quantity}x${name} - ${amount}\n`;
  }
  return outPut + `Total: ${printablePrice(total)}`;
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
