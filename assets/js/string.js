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
// so firstName=" Norah" is not the same as firstName="Norah"
//comparing the 2 will yield false
firstName=" Norah";
name="Norah";
console.log(firstName==name)

//using trimStart, for removing space at the start of a string
//this will yield true because space will have been removed.
firstName=" Norah";
name="Norah";
console.log(firstName.trimStart() ==name)

//changing string case
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


