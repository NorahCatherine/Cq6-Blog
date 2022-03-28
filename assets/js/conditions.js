//condition statements
/*
if(expression){
    //code goes here
}
*/
 const IG_MIN_AGE=13;
 let Suzan = {
     age: 12
 };
 //if statement
 if(Suzan.age >= IG_MIN_AGE){
     console.log('congrats, you can join instagram!')
 }
 //send exit message for age 45-60
 let oldiesAge=45;
 if(oldiesAge>= 45 && oldiesAge<=60){
     console.log('you should plan leaving instagram')
 }
 //if else , else if
 if(Suzan.age >= IG_MIN_AGE){
    console.log('congrats, you can join instagram!')
}else{
    console.log('sorry you cant watch reels yet')
}
//else if
if(Suzan.age >= IG_MIN_AGE){
    console.log('congrats, you can join instagram!')

} else if(Suzan.age==IG_MIN_AGE-1){
    console.log('just one more year!')
}
else if(Suzan.age==IG_MIN_AGE-2){
    console.log('yo, 2 more years to join swili')
}
else{
    console.log('please leave ig and concentrate on school')
}
//Switch case
switch(Suzan.age){
    case Suzan.age>=IG_MIN_AGE:
        console.log('congrats, you can join instagram!')
        break;
    case Suzan.age==IG_MIN_AGE-1:
            console.log('just one more year!')
            break;
            case Suzan.age==IG_MIN_AGE-2:
    console.log('yo, 2 more years to join swili')
    break;
    default:
        console.log('please leave ig and concentrate on school')
}
//ternary operator//used for quick checks of 2 conditions
//(condition) ? truthy: falsey;
let ageGroup=(Suzan.age>=18) ? "adult" : "minor";
if (Suzan,age >=18){
    ageGroup="Adults"
}



    
 
