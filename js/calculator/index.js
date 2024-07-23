const display = document.getElementById("display");

let enteredData = function changeSth (data) {
    enteredData = enteredData + data;
    console. log (enteredData) ;
}

function clear(){
    enteredData = "";
    }

function calculateTotal () {
        let total = eval (enteredData); 
        console.log ("Total is ", total);
    }

