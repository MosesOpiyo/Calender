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
        return false;

    }
    if(month <= 0, month > 12) {
        alert("month of birth is invalid");
        document.getElementById('month').style.borderColor = "red";
        return false;
    }

}
function calculateDay() {
    let DD = parseInt(day);
    let MM = parseInt(month);
    
    let yr = year.toString()
    var d1 = yr[0]
    var d2 = yr[1]
    var d3 = yr[2]
    var d4 = yr[3]
   
    var CC = parseInt('' + d1 + d2);
    var YY = parseInt('' + d3 + d4);

    var birthDay = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    var theDay = Math.round(birthDay);
    return theDay;

    var nameMale = ['Kwasi','Kwadwo','Kwabena','Kwaku', 'Yaw', 'Kofi','Kwame']
    
    

}