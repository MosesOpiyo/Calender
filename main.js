const form = document.getElementById("form")
let userDay = document.getElementById('dayinput').value 
let userMonth = document.getElementById('monthinput').value 
let userYear = document.getElementById('yearinput').value 
function checkBlank() {
    var message = "";
    
    if(document.getElementById('dayinput').value == ""){
        message += "Enter your day of birth \n";
        document.getElementById('dayinput').style.borderColor = "red";
   
    }
    if(document.getElementById('monthinput').value == ""){
        message += "Enter your month of birth \n";
        document.getElementById('monthinput').style.borderColor = "red";
    }
    if(document.getElementById('yearinput').value == ""){
        message += "Enter your year of birth \n";
        document.getElementById('yearinput').style.borderColor = "red";
    }
    if(message !="") {
        alert(message);
        return false
    } 
}


function correctDay() {
    if(userDay <= 0, userDay > 31){
        alert("day of birth is invalid");
        document.getElementById('dayinput').style.borderColor = "red";
        return false;  
    }
    else{
        return true;
    }
    
}

function correctMonth() {
    if(userMonth <= 0, userMonth > 12) {
        alert("month of birth is invalid");
        document.getElementById('monthinput').style.borderColor = "red";
        return false;
    }
    else {
        return true;
    }
}
var birthDay = parseInt(Math.round(((CC/4)-2*CC-1)+((5*YY/4))+((26*( userMonth +1)/10))+userDay )%7);

let yr = userYear.toString()
    var d1 = yr[0]
    var d2 = yr[1]
    var d3 = yr[2]
    var d4 = yr[3]
   
    let CC = parseInt('' + d1 + d2);
    let YY = parseInt('' + d3 + d4);

function checkRadio() {
    var Male = document.getElementById("male");
    var Female = document.getElementById("female");
    var nameMl = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var nameFml = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    if(Male.checked == true){
        let numb = parseInt(birthDay)
        
    
        document.getElementById('output').textContent = "Your Akan name is " + nameMl[numb];
    
    }
        
        
       
    
    if(Female.checked == true){
        document.getElementById('output').textContent = "Your Akan name is " + nameFml[numb];
         
    }

    
    

}

