/*addFive should be a function.

Passed
Once both functions have run, the sum should be equal to 8.

Passed
Returned value from addFive should be undefined.

Passed
Inside the addFive function, you should add 5 to the sum variable.*/

var sum=0;
function addThree(){
    sum=sum+3;
}
function addFive(){
    sum+=5;
}
addThree();
addFive();