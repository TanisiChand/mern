function calculate(){
    const subjectA = document.getElementById("subjectA");
    const subjectB = document.getElementById("subjectB");
    const subjectC = document.getElementById("subjectC");
    const subjectD = document.getElementById("subjectD");
    const subjectE = document.getElementById("subjectE");

    

    result = (subjectA + subjectB + subjectC + subjectD + subjectE)/500

    if (result >= 50)
    {
        console.log (" You have Passed!")
    }
    else{
        console.log (" You have Failed!")
    }
}