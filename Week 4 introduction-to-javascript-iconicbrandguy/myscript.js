


function formValidation(){
    let valid = true;

    // clear error messages
    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';
    document.getElementById('telError').innerHTML='';
    document.getElementById('ageError').innerHTML='';
    document.getElementById('passwordError').innerHTML='';  //  Don't understand their function yet

    // validate name
    let nameUse = document.getElementById('name').value;
    if(nameUse === ""){
        document.getElementById('nameError').innerHTML='Error!, Name is required'
        valid = false;
    }

    //validate email
    let emailUse = document.getElementById('email').value;
    if(emailUse === ""){
        document.getElementById('emailError').innerHTML='Error!, Email is required'
        valid = false;
    }

    //validate age
    let ageUse = document.getElementById('age').value;
    if(ageUse === ""){
        document.getElementById('ageError').innerHTML='Error!, Age is required'
        valid = false;
    } else if (isNaN(age) || age < 18){
        document.getElementById('ageError').innerHTML='Error!, Age must be a number not less than 18.'
        valid = false;
    }

    //validate phone number
    let phoneUse = document.getElementById('tel').value;
    if(phoneUse === ""){
        document.getElementById('telError').innerHTML='Error!, Phone number is required'
        valid = false;
    } else if (isNaN(tel) || tel < 11){
        document.getElementById('telError').innerHTML='Error!, Number must be at least 11 characters.'
        valid = false;
    }

    //validate password
    let pwdUse = document.getElementById('password').value;
    if(pwdUse === ""){
        document.getElementById('passwordError').innerHTML='Error!, Password is required'
        valid = false;
    }
    else if(pwdUse.length < 6 ){
        document.getElementById('passwordError').innerHTML='Error!, Password must be at least 6 character long!' 
    }

    // if all validations passed, form should be submitted
    return valid

}








function loginValidation(){
    let valid = true;

    // clear error messages
    document.getElementById('emailError').innerHTML='';
    document.getElementById('passwordError').innerHTML='';  //  Don't understand their function yet

    //validate email
    let emailUse = document.getElementById('email').value;
    if(emailUse === ""){
        document.getElementById('emailError').innerHTML='Error!, Email is required'
        valid = false;
    }

    //validate password
    let pwdUse = document.getElementById('password').value;
    if(pwdUse === ""){
        document.getElementById('passwordError').innerHTML='Error!, Password is required'
        valid = false;
    }
    else if(pwdUse.length < 6 ){
        document.getElementById('passwordError').innerHTML='Error!, Password must be at least 6 character long!' 
    }

    // if all validations passed, form should be submitted
    return valid

}