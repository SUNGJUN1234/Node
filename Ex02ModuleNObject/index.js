const {odd,even} = require('./var');
const checkOddEven = require('./function');

function checkStringOddEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return even;
    }
}

module.exports = checkStringOddEven
console.log(checkOddEven(3));
console.log(checkStringOddEven('hello'));