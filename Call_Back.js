function  sayGoodbye()
{
    console.log("Good Bye!");
}
function greet(name,sayGood)
{
    console.log(`hai,${name}`);
    sayGood();
}
greet('jemi',sayGoodbye)


