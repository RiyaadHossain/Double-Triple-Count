// Get Variables 
const input_Field = document.getElementById("input-digit");
const dobule_Btn = document.getElementById("dobule-btn");
const triple_Btn = document.getElementById("triple-btn");
const reset_Btn = document.getElementById("reset-btn");
const display_Digit = document.getElementById("display-digit");

// Dobule Button 
document.getElementById("dobule-btn").addEventListener("click", (e) => {
    if (parseInt(input_Field.value) < 0) {
      alert("Please Input a Positive Intiger");
    } else {
      display_Digit.innerText = parseFloat(input_Field.value) * 2;
    }
    input_Field.value = "";
})

// Triple Button 
document.getElementById("triple-btn").addEventListener("click", () => {
     if ( parseInt(input_Field.value) < 0) {
       alert("Please Input a Positive Intiger");
     } else {
       display_Digit.innerText = parseFloat(input_Field.value) * 3;
     }
     input_Field.value = "";
});

document.getElementById("reset-btn").addEventListener("click", () => {
    display_Digit.innerText = "00" ;
})