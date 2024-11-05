let amount = 1500;
let accountBalance = 2000;
let isAccountVerified = true;

if (amount > accountBalance) {
    console.log("Insufficient funds.");
} else if (!isAccountVerified) {
    console.log("Account is not verified.");
} else if (amount > 1000) {
    console.log("Transaction requires additional approval.");
} else {
    console.log("Payment approved and processed.");
}
