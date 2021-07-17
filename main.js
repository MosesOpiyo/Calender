function checkBlank() {
    var message = "";
    
    if(document.getElementById('day').value == ""){
        message += "Enter your day of birth \n";
        document.getElementById('day').style.borderColor = "red";
   
    }
    if(document.getElementById('month').value == ""){
        message += "Enter your month of birth \n";
        document.getElementById('month').style.borderColor = "red";
    }
    if(document.getElementById('year').value == ""){
        message += "Enter your year of birth \n";
        document.getElementById('year').style.borderColor = "red";
    }
    if(message !="") {
        alert(message);
        return false
    } 
}
function checkRadio() {

}
function checkDate() {
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value

    if(day <= 0, day > 31){
        alert("day of birth is invalid");
        document.getElementById('day').style.borderColor = "red";

    }
    if(month <= 0, month > 12) {
        alert("month of birth is invalid");
        document.getElementById('month').style.borderColor = "red";
    }
}
