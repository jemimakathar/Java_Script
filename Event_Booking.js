let age = 66; 

if (age < 13) {
    console.log("You qualify for a Child Ticket.");
} 
else if (age >= 13 && age <= 64) {
    console.log("You qualify for a Regular Ticket.");
} 
else if (age >= 65) {
    console.log("You qualify for a Senior Ticket.");
}
else{
    console.log("Invalid age input.");
}