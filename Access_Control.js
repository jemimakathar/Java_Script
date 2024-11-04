let role = "editor";

switch (role) 
{
    case "admin":
        console.log("Access granted to all sections. Welcome, Admin!");
        break;
    case "editor":
        console.log("Access granted to editing and viewing sections.");
        break;
    case "viewer":
        console.log("Access granted to viewing sections only.");
        break;
    default:
        console.log("Access denied. Unknown role.");
}