let input = prompt("Enter the price in format(using $49.99):");
let amount = input.slice(1);
let newamount = parseFloat(amount);
let discountedamount = newamount - newamount * 0.1;
console.log("The final price with discount: $" + discountedamount);
document.body.innerHTML += `<p>Your discounted amount is: $${discountedamount}</p>`;
