var myVar = 'Global Variable'

function checkScope( ){
    myVar = 'Local Variable'
    console.log(myVar )
}

var a = 10;
var b = 20;
var linebreak = "<br />";


document.write ("((a > b) ? 100 : 200 => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

if (b > a) {
    document.write("<b>TRUE</b>");
}

var aProperty;
for (aProperty in navigator)
{
    document.write(aProperty)
    document.write("<br/>")
}