/*myGlobal should be defined
myGlobal should have a value of 10
myGlobal should be declared using the var keyword
oopsGlobal should be a global variable and have a value of 5*/

var myGlobal=10;
var oopsGlobal=5;
function fun1(){

}
function fun2(){
    var output="";
    if (typeof myGlobal!="undefined"){
        output+="myGlobal:"+myGlobal;
    }
    if (typeof oopsGlobal!="undefined"){
        output+="oopsGlobal:"+oopsGlobal;
    }
    console.log(output)
}
fun2()