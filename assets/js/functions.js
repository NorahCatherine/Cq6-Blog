let _age = 13;
let myName2  ="Annie";


function checkAge() {
    let _age = 15;
    let myName2  ="Mary";
    console.log('local scope', myName2);

    if (_age>= 16) {
        console.log("You may proceed and attend");
    } else {
        console.log("Sorry, we can't let you in.")
    }
}
checkAge() // call, invoke, execute

console.log('global scope', myName2);

//functions that take input
const MIN_AGE=16
function checkAgeV2(age){
    if(age<MIN_AGE){
        console.log('Welcome to the traine program')
    }else{
        console.log('you may proceed with intern')
    }
}
//calling the function
checkAgeV2(12);
checkAgeV2(14);
checkAgeV2(27);
checkAgeV2("Hello");//this will fail because string vs number


    function checkAgeV3(age){
    if(typeof age=='number' && age <= MIN_AGE){
        console.log('Welcome to the traine program')
    }else if(typeof age=='number' && age> MIN_AGE){
        console.log('you may proceed with intern')
    }else{
        console.log("Invalid data provided.")
    }
}
//calling the function CheckAgeV3
checkAgeV2(34);
checkAgeV2("15");
checkAgeV2(10);
checkAgeV3("hello")

//function that calls another function // callbacks
function printNumber(num,fn){
    fn(num);
}
// nameless functions/anonymous and are in 2 forms.
//syntax is ()
let sayName=function(name){
    console.log('My name is :', name)

}
sayName=("Norah");

