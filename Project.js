function hasNumber(str){
    return /\d/.test(str);
}

// validate Name--------
    // shouldn't be empty
    // Doesn't contain a number
function validateName(){
    let x = document.forms["dataEntry"]["fName"].value;
    if (x == "" || hasNumber(x) == true){
        document.getElementById("fName").value = "Enter a valid first name";
        document.getElementById("fName").style.color = "red";
        document.getElementById("nameBox").style.borderBottomColor = "red";
        return false;
    }else {
        document.getElementById("fName").style.color = "black";
    }
}
// Validate Email----------
    // shouldnt be empty
    // must contain @
function validateEmail(){
    let x = document.forms["dataEntry"]["Email"].value
    if (x == "" || !x.includes("@")){
        document.getElementById("Email").value = "Enter a valid Email";
        document.getElementById("Email").style.color = "red";
        document.getElementById("mailBox").style.borderBottomColor = "red";

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
        document.getElementById("countryBox").style.borderBottomColor = "red";
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
        document.getElementById("PhoneNumber").value = "Enter a valid Phone Number";
        document.getElementById("PhoneNumber").style.color = "red";
        document.getElementById("phoneNoBox").style.borderBottomColor = "red";

    }else {
        document.getElementById("PhoneNumber").style.background = "white";
    }
}