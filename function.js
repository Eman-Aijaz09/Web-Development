// function printText(){
//     console.log("hello world")
// }
// printText()
// addTwoNumbers(1,9)
// function addTwoNumbers(num1,num2=0,num3){
//     console.log(num1+num3);   
// }
// function userName(username){

//     if(username==undefined){
//         console.log('username tou dedo yar');
//         return
//     }
//     else{
//         console.log(username,'just logged in!');
//     }
// }
// userName()

function temperatureConverter(x){
    let temp= (x*9/5)+32;
    console.log(temp, ' is the temperature in farenheit')
    return temp;
}
console.log(temperatureConverter(2))


