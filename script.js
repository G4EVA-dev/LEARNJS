
function sayHello(){
    alert("Hello World!");
}

function over() {
    document.write ("Mouse Over");
    }

    function out() {
        document.write ("Mouse Out");
        }

   // How to use the Confirmation Dialog Box
function getConfirmation(){
    var retVal = confirm("Do you want to continue ?");
    if(retVal == true){
        document.write("User wants to continue!");
        console.log("TRUE");
        return true; 
    }
    else{
        document.write("User does not want to continue!");
        console.log("FALSE");
        return false;
    }
}  

function getValue(){
    var getVal = prompt("Enter your name: ", " your name here");
    document.write("You have entered: " + getVal);
}

var str = new String("This is a New String");
console.log(str);
document.write("str.constructor is:" + str.constructor + "</br>");
document.write("str.length is:" + str.length);