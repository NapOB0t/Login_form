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
        // icon
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoV-8oeENjG-ITsNG7xaLB4nhCZ3Vao8HCMt7YrhQCw&s"
        img.width = "30"
        img.height = "30"
        img.style.position = "absolute"
        img.style.top = "150px"
        document.getElementById("nameBox").appendChild(img);

        return false;
    }else {
        document.getElementById("fName").style.color = "black";
        document.getElementById("nameBox").style.borderBottomColor = "black";
        // icon
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
        img.width = "40"
        img.height = "40"
        img.style.position = "absolute"
        img.style.top = "140px"
        document.getElementById("nameBox").appendChild(img);

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
        // icon
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoV-8oeENjG-ITsNG7xaLB4nhCZ3Vao8HCMt7YrhQCw&s"
        img.width = "30"
        img.height = "30"
        img.style.position = "absolute"
        img.style.left = "600px"
        document.getElementById("mailBox").appendChild(img);

        return false;
    }else {
        document.getElementById("Email").style.color = "black";
        document.getElementById("mailBox").style.borderBottomColor = "black";
        // icon
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
        img.width = "40"
        img.height = "40"
        img.style.position = "absolute"
        img.style.left = "600px"
        document.getElementById("mailBox").appendChild(img);

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
        // icon
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoV-8oeENjG-ITsNG7xaLB4nhCZ3Vao8HCMt7YrhQCw&s"
        img.width = "30"
        img.height = "30"
        img.style.position = "absolute"
        img.style.left = "600px"
        document.getElementById("countryBox").appendChild(img);
        return false;
    } else {
        document.getElementById("Country").style.color = "black";
        document.getElementById("countryBox").style.borderBottomColor = "black";
        // icon
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
        img.width = "40"
        img.height = "40"
        img.style.position = "absolute"
        img.style.left = "600px"
        document.getElementById("countryBox").appendChild(img);

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
        // icons
        let img = document.createElement("img");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoV-8oeENjG-ITsNG7xaLB4nhCZ3Vao8HCMt7YrhQCw&s"
        img.width = "30"
        img.height = "30"
        img.style.position = "fixed"
        img.style.left = "600px"
        document.getElementById("phoneNoBox").appendChild(img);
        return false;

    }else {
        document.getElementById("PhoneNumber").style.color = "black";
        document.getElementById("phoneNoBox").style.borderBottomColor = "black";
        // icon
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
        img.width = "40"
        img.height = "40"
        img.style.position = "absolute"
        img.style.left = "600px"
        document.getElementById("phoneNoBox").appendChild(img);

    }
}