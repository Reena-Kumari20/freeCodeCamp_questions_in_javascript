/*processed should have a value of 2

Passed
You should assign processArg to processed*/

var processed=0;
function processArg(num){
    return (num+3)/5;
}
processed=processArg(7)
console.log(processed)