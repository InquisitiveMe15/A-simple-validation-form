function Validation(){
    let firstName = document.CovidRegistration.firstname;
    let secondName = document.CovidRegistration.secondname;
    let Email = document.CovidRegistration.youremail;
    let Password = document.CovidRegistration.yourpassword;
    let male = document.CovidRegistration.gender1;
    let female = document.CovidRegistration.gender2;
    let others = document.CovidRegistration.gender3;
    if(firstname_validation(firstName)){
        if(secondname_validation(secondName)){
            if(email_validation(Email)){
                if(password_validation(Password)){
                    if(gender_validation(male,female,others)){
                        if(confirm("Check the details filled again and press submit to complete the registration. Stay home, Stay safe.")){
                            return true;
                        }
                    }
                }
            }
        }
    } 
    return false;
}


function firstname_validation(firstName){
    let alphabet = /^[a-zA-Z]*$/;
    if(firstName.value.match(alphabet) && firstName.value.length!=0){
        return true;
    }
    if(firstName.value.length == 0){
        alert("Firstname can't be empty.")
        firstName.focus();
        return false;
    }
    else{
        alert("Firstname can have only alphabets and not any other characters.");
        firstName.focus();
        return false;
    }
}

function secondname_validation(secondName){
    let alphabet = /^[a-zA-Z]*$/;
    if(secondName.value.match(alphabet) && secondName.value.length!=0){
        return true;
    }
    if(secondName.value.length == 0){
        alert("Secondname can't be empty.")
        secondName.focus();
        return false;
    }
    else{
        alert("Secondname can have only alphabets and not any other characters and it can't be empty.");
        secondName.focus();
        return false;
    }
}

function email_validation(Email){
    let valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(Email.value.match(valid_email) && Email.value.length!=0){
        return true;
    }
    else{
        alert("Enter a valid email address.");
        Email.focus();
        return false;
    }
}

function password_validation(Password){
    let password_length = Password.value.length;
    if(password_length < 8){
        alert("Minimum length of Password should be 8 and it can't be empty.");
        Password.focus();
        return false;
    }
    return true;
}

function gender_validation(male,female,others){
    if(male.checked){
        return true;
    }
    else if(female.checked){
        return true;
    }
    else if(others.checked){
        return true;
    }
    else{
        alert("Please choose your gender.");
        return false;
    }
}