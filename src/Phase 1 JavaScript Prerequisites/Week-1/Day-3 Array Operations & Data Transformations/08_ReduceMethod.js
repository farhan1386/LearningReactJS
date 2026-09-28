const shoppingCart = [
  { product: "Wireless Mouse", price: 25, quantity: 1 },
  { product: "Mechanical Keyboard", price: 90, quantity: 1 },
  { product: "USB-C Cable", price: 10, quantity: 3 }
];


const totalBill = shoppingCart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0); // Start the total bill at $0

console.log(totalBill); 

