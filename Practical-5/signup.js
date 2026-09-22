let form = document.getElementById("signupform");
form.addEventListener("submit",function(event)
{
    event.preventDefault();

    let name = document.getElementById("fullname").value;
let email = document.getElementById("emailadder").value;
let phone = document.getElementById("phone").value;
let password = document.getElementById("pass").value;
let confirmPassword = document.getElementById("confirmpass").value;
let program= document.getElementById("program").value;


let nameRegex = /^[A-Za-z]{3,40}$/;
 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let gender = document.querySelector('input[name="gender"]:checked');
let terms = document.getElementById("terms").checked;

if (!terms) {
    alert("Please accept the terms and conditions.");
    return;
}

if (!gender) {
    alert("Please select your gender.");
    return;
}

 if(!nameRegex.test(name))
 {
    alert("enter valid name .");
    return;

 }

 if(!emailRegex.test(email))
 {
    alert("enter valid email address .");
    return;
    
 }

 if(!passwordRegex.test(password))
 {
    alert("enter valid password ,must contain 8 char .");
    return;
    
 }

 if(password !== confirmPassword)
 {
    alert("password does not match .");
    return;
    
 }

 if(program ==="")
 {
    alert("select your degree .");
    return;
    
 }

 
 
 alert("Registration Successfull");
});
