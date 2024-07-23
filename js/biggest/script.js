function calculate(){
    const numberA = document.getElementById("numberA");
    const numberB = document.getElementById("numberB");
    const numberC = document.getElementById("numberC");
    const numberD = document.getElementById("numberD");


    if (numberA.value > numberB.value && numberA.value > numberC.value && numberA.valu >numberD.value){
        console.log( numberA + " is the greatest");
    }
    else if (numberB.value > numberA.value && numberB.value > numberC.value && numberB.value >numberD.value){
        console.log( numberB + " is the greatest");
    } 
    else if (numberC.value > numberA.value && numberB.value > numberC.value && numberS.valu >numberD.value){
        console.log( numberC + " is the greatest");
    } 
    else {
        console.log( numberD + " is the greatest");
    } 

}