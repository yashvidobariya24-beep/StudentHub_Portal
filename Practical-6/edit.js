// ===============================
// EDIT PROFILE
// ===============================


// Form select karo
let form = document.getElementById("editForm");


// Page load hone par data load karo
loadProfile();


// ===============================
// LOAD PROFILE DATA
// ===============================

async function loadProfile() {

    try {

        // Check karo localStorage mein updated data hai ya nahi
        let savedData = localStorage.getItem("studentData");


        if (savedData) {

            // JSON string ko JavaScript object mein convert
            let student = JSON.parse(savedData);

            fillForm(student);

        }

        else {

            // Agar localStorage mein data nahi hai
            // toh external JSON file se data lo

            let response = await fetch("profile.json");

            let student = await response.json();

            fillForm(student);

        }

    }

    catch (error) {

        console.log("Error loading profile:", error);

    }

}


// ===============================
// FILL FORM
// ===============================

function fillForm(student) {

    document.getElementById("studentname").value =
        student.name;

    document.getElementById("studentid").value =
        student.studentId;

    document.getElementById("studentemail").value =
        student.email;

    document.getElementById("studentphone").value =
        student.phone;

    document.getElementById("dept").value =
        student.department;

    document.getElementById("sem").value =
        student.semester;

    document.getElementById("dob_input").value =
        student.dob;

    document.getElementById("address_input").value =
        student.address;


    // Gender
    if (student.gender === "Male") {

        document.getElementById("male").checked = true;

    }

    else {

        document.getElementById("female").checked = true;

    }

}


// ===============================
// SAVE CHANGES
// ===============================

form.addEventListener("submit", function(event) {

    // Form ko automatically submit hone se roko
    event.preventDefault();


    // New student object banao

    let student = {

        name:
            document.getElementById("studentname").value,

        studentId:
            document.getElementById("studentid").value,

        email:
            document.getElementById("studentemail").value,

        phone:
            document.getElementById("studentphone").value,

        department:
            document.getElementById("dept").value,

        semester:
            document.getElementById("sem").value,

        gender:
            document.querySelector(
                'input[name="gender"]:checked'
            ).value,

        dob:
            document.getElementById("dob_input").value,

        address:
            document.getElementById("address_input").value
    };


    // JavaScript object → JSON string
    let jsonData = JSON.stringify(student);


    // Browser ke localStorage mein save
    localStorage.setItem(
        "studentData",
        jsonData
    );


    // Profile page par redirect
    window.location.href = "profile.html";

});