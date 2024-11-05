let role = "developer";

switch (role) 
{
    case "admin":
        console.log("Access granted to all sections. Welcome, Admin!");
        break;
    case "developer":
        console.log("Access granted to development sections.");
        break;
    case "tester":
        console.log("Access granted to testing sections only.");
        break;
    default:
        console.log("Access denied. Unknown role.");
}



