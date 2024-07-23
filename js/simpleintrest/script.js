
function calculateSI(){
    const principle = document.getElementById("principle");
    const time = document.getElementById("time");
    const rate = document.getElementById("rate");
    
    si = (principle.value * time.value * rate.value)/100;
    
    console.log("The Simple Intrest is " + si);
}