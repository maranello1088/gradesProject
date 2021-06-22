//Assignment on 17/01/2020
//1
/*function grade(a){
    if (a < 40){
        return "F";
    }   else if (a <= 45 && a >= 40){
        return "E";
    }else if (a <= 49 && a >= 46){
        return "D";
    }else if (a <= 59 && a >= 50){
        return "C";
    }else if (a <= 69 && a >= 60){
        return "B";
    }else {
        return "A"
    }
}
console.log(grade(77))

//2


function changeBodyBg(color){
    document.body.style.backgroundColor = color;   
}
changeBodyBg("white")
const b = document.getElementById("alertme")

b.addEventListener("click", function(){
    alert("Happy New Year");
})
*/

function grade(a) {
    if (isNaN(parseInt(a))) {
        return "Please input a Number"
    } else if (a < 40) {
        return "F";
    } else if (a <= 45 && a >= 40) {
        return "E";
    } else if (a <= 49 && a >= 46) {
        return "D";
    } else if (a <= 59 && a >= 50) {
        return "C";
    } else if (a <= 69 && a >= 60) {
        return "B";
    } else if (a >= 70 && a <= 100) {
        return "A";
    } else {
        return "Input value between 1-100";
    }
}
console.log(grade(77))

var myButton = document.getElementById("btn");
var myInput = document.getElementById("grading")
myButton.addEventListener("click", function () {
    var finalInputResult = grade(myInput.value)
    document.getElementById("grade").innerText =  finalInputResult
}) 
