// 🛒 Shopping Cart Total Calculator
// 
// Create an array called `cart` that contains at least 3 product objects.
// Each product should have the following properties: name, price, and quantity.
//
// Write a function `getTotalPrice()` that calculates the total cost of all items
// in the cart (price * quantity for each item).
//
// If the total is greater than or equal to 100, print "free delivery".
// Otherwise, print "delivery fee is 5$".

let cart = [
    {name: 'Keyboard', price: 25, quantity: 2},
    {name: 'Mouse', price: 15, quantity: 1},
    {name: 'Monitor', price: 120, quantity: 1},
];

function getTotalPrice() {
    let total = 0;

    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let result = item.price * item.quantity;

        total += result;
    }

    return total;
};

const funcResult = getTotalPrice();

if(funcResult >= 100) {
    console.log("free delivery");
} else {
    console.log("delivery fee is 5$");
}