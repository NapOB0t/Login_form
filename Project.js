function validateName(){
    let x = document.forms["dataEntry"]["fName"].value;
    if (x == ""){
        document.getElementById("fName").style.background = "red";
        return false;
    }else {
        document.getElementById("fName").style.background = "white";
 
    }
}

function validateEmail(){
    let x = document.forms["dataEntry"]["Email"].value
    if (x == ""){
        document.getElementById("Email").style.background = "red";
        return false;
    }else {
        document.getElementById("Email").style.background = "white";
    }

}
// country validation 
    // not empty
function validateCountry(){
    let x = document.forms["dataEntry"]["Country"].value;
    if (x == ""){
        document.getElementById("Country").value = "Please select a country";
        document.getElementById("Country").style.color = "red";
        return false;
    } else {
        document.getElementById("Country").style.background = "white";
        document.getElementById("Country").style.color = "black";

    }
}
// Phone number validation 
    // 10 digits
function validateNumber(){
    let x = document.forms["dataEntry"]["PhoneNumber"].value;
    if (x.length != 10 ){
        document.getElementById("PhoneNumber").style.background ="red";
    }else {
        document.getElementById("PhoneNumber").style.background = "white";
    }
}
