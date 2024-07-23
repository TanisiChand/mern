
function calculate(){
    const radius = document.getElementById("radius");

    area = Math.PI*(radius.value **2)
    circumference = 2 * Math.PI * radius.value
    
    console.log("Area is " + area);
    console.log("Circumference is " + circumference);

}