
/*function detailsValidation(){
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

} */


let form = document.getElementById('registrationForm')
form.addEventListener('submit', function(reload){
    reload.preventDefault();  // to prevent default feature like page loading on submit
    // validation now
    let email = form.elements["email"].value;
    let password = form.elements["password"].value;

    if(email && password){
        form.submit();
    } else {
        alert('Kindly fill out your email and password')
    }; 
});