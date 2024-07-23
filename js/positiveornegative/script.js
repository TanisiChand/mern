function calculate(){
    const numberA = document.getElementById("numberA");

    if (numberA.value > 0) {
        console.log("The number is positive");
    }
    
    else if (numberA.value == 0) {
      console.log("The number is zero");
    }
    
    else {
         console.log("The number is negative");
    }
}