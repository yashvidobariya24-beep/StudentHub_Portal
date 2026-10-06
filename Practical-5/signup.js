let form = document.getElementById("signupform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("emailaddr").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confirmpass").value;
    let program = document.getElementById("program").value;

    let nameRegex = /^[A-Za-z ]{3,40}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let phoneRegex = /^[0-9]{10}$/;

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

    if (!nameRegex.test(name)) {
        alert("Enter a valid name.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 8 characters, one letter and one number.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password does not match.");
        return;
    }

    if (program === "") {
        alert("Please select your degree.");
        return;
    }

    form.submit();
});