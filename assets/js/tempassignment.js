

let temperature=13;
if(temperature>=20 && temperature<=36){
    console.log('lovely,you got Normal temperature!')
}else if(temperature>=37 && temperature<=40){
    console.log('your body temperature is above Normal!')
}else if (temperature>=40){
    console.log('sorry,your body temperature is Erratic!!!,Kindly visit the nearest hospital for checkup.')
}else{
    console.log('invalid temperature')
}