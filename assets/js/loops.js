//for loop
//for — loops through a block of code until the counter reaches a specified number.
/*
for(Counter,condition,expression){
   // code goes here
}
*/
//elevator going down
for(let floor=3; floor>1;floor--){
    console.log('going down!');
    if(floor==1){
        console.log('youve arrived at your destination')
    }
}
for(let num=0;num<=10;num++){
    console.log("hi there!")
}
//while loop
//while — loops through a block of code as long as the condition specified evaluates to true.
const REQUIRED_AGE=18;
let currentAge=2;
while(currentAge<REQUIRED_AGE){
    console.log("you are under age");
    currentAge+=1;
}
//do while loop
//do…while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.
/*do {
    // Code to be executed
}
while(condition);
*/
var i = 1;
do {
    console.log("The number is " + i + "");
    i++;
}
while(i <= 5);

//assigment about an elevator on the basement to move to level 3
for(let level=0; level<4;level++){
    console.log('still elevating to 4!')
}
//elevating using if
let level=0;
if(level==4){
    console.log('elevated to level 4!')
}

