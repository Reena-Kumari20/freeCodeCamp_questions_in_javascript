/*The code should not contain a global myVar variable.
You should add a local myVar variable.*/
let myvar=10;
function myLocalscope(){
    let myvar=5;
    console.log('inside myLocal scope:',myvar);
}
myLocalscope()
console.log('outside myLocalScope',myvar);