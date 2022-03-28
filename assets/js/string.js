let firstName="" ;//empty string
let lastName="Catherine";
firstName="Norah";
let city='Kampala';


//3 methods of putting strings together
//method 1
let fullName="".concat(firstName, " " , lastName);
console.log (fullName)

//method 2
fullName=firstName+ lastName;// will print out NorahCatherine
console.log(fullName)

//method 3 & most prefered.

fullName=`${lastName} ${firstName} `
console.log(fullName)

//more of method 3.
fullName=`${firstName} ${lastName} ${city}`
console.log(fullName)

//space is considered as a value is js
// so firstName="   Norah" is not the same as firstName="Norah" because of the space before the first one.
//comparing the 2 will yield false
firstName=" Norah";
name="Norah";
console.log(firstName==name)

//using trimStart, for removing space at the start of a string
//this will yield true because space will have been removed.
firstName=" Norah";
name="Norah";
console.log(firstName.trimStart() ==name)

let codeQueenAddress={
    town:"Ntinda",
    city:"Kampala",
    seatingCapacity:1000,
    building:"Ntinda Complex",
    office:"Innovation Village",
    1411:"Norah IT Personel"
}
//getting information from an object(codeQueenAddress)
console.log(codeQueenAddress.office)//dot notation and this is used when we are dealing with a string property.
console.log(codeQueenAddress['building'])//subscript method
console.log(codeQueenAddress[1411])//square brackets used for numbers/none strings

let firstChildName="Kaitlyn";
console.log(firstChildName.slice(0,4))
console.log(firstChildName.slice(-3))
if(firstChildName.includes('Kait')){
    console.log('found Kait!')
}
else{
    console.log('not discovered')
}

if(firstChildName.includes('Kair')){
    console.log('found Kair!')
}
else{
    console.log('ooops,not discovered!')
}

//finding the length of a string.
console.log(firstChildName.length)
let alphabet="abcdefghijklmnopqrstuvwxyz"
console.log(alphabet.length)

const person={
    name:"Norah",
    contact :{
        phone: "0708104601",
        email:"norah200@gmail.com",
        ig:"instagram.com/norah16"
     }
}
//accessing data within a nested object
