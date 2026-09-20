// const registerform = document.getElementById("registerform");

// registerform.addEventListener("submit" , function(event){
//     event.preventDefault();

//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const mobile = document.getElementById("mobile");
//     const password = document.getElementById("password");
//     const confirmpassword = document.getElementById("confirm");

//     const nameregex = /^[A-Za-z ]+$/;

//     const emailregex = /^[0-9]{2}d[a-xA-Z]{2}[0-9]{3}@charusat\.edu\.in$/;

//     const mobileregex = /^[0-9]{10}$/;

//     const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z]{8,}$/;

//     if(!nameregex.test(name)){
//         alert("name should be contain letters and spaces");
//         return;
//     }

//     if(!emailregex.test(email)){
//         alert("please enter a valid CHARUSAT email ");
//         return;
//     }

//     if(!mobileregex.test(mobile)){
//         alert("mobile number must be contain exactly 10  digits ");
//         return;
//     }

//     if(!passwordregex.test(password)){
//         alert("password must be contain at leaste 8 characters, 1 capital letter, 1 number");
//         return;
//     }
//     if(password!=confirmpassword){
//         alert("password and confiempassword does not match");
//         return;
//     }

//     alert("registration successful!");
//     registerform.submit();
// });

const registerForm = document.getElementById("registerForm");

const validationPopup = document.getElementById("validationPopup");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");

const popupOk = document.getElementById("popupOk");

const closePopup = document.getElementById("closePopup");




function showPopup(title, message, success = false) {

    popupTitle.textContent = title;

    popupMessage.textContent = message;

    validationPopup.style.display = "flex";


    if (success) {

        popupTitle.style.color = "green";

    } else {

        popupTitle.style.color = "#dc3545";

    }
}



function hidePopup() {

    validationPopup.style.display = "none";

}


closePopup.addEventListener("click", hidePopup);

popupOk.addEventListener("click", function () {

    hidePopup();

});



registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirm").value;


    

    const nameRegex = /^[A-Za-z ]+$/;

    const emailRegex =
        /^[0-9]{2}d[a-zA-Z]{2}[0-9]{3}@charusat\.edu\.in$/;

    const mobileRegex =
        /^[0-9]{10}$/;

    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;




    if (!nameRegex.test(name)) {

        showPopup(
            "Invalid Name",
            "Name should contain only letters and spaces."
        );

        return;
    }



    if (!emailRegex.test(email)) {

        showPopup(
            "Invalid Email",
            "Please enter a valid CHARUSAT email."
        );

        return;
    }




    if (!mobileRegex.test(mobile)) {

        showPopup(
            "Invalid Mobile Number",
            "Mobile number must contain exactly 10 digits."
        );

        return;
    }



    if (!passwordRegex.test(password)) {

        showPopup(
            "Invalid Password",
            "Password must contain at least 8 characters, 1 letter and 1 number."
        );

        return;
    }


    if (password !== confirmPassword) {

        showPopup(
            "Password Mismatch",
            "Password and Confirm Password do not match."
        );

        return;
    }



    showPopup(
        "Registration Successful! 🎉",
        "Your account has been registered successfully.",
        true
    );



    popupOk.onclick = function () {

        window.location.href =
            "login.html?registered=success";

    };

});