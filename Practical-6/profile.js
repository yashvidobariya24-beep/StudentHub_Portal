// Profile page load hote hi function call hoga
loadProfile();


// Profile data load karne ka function
async function loadProfile() {

    try {

        // Pehle localStorage check karo
        let savedData = localStorage.getItem("studentData");


        if (savedData) {

            // localStorage se JSON string ko JavaScript object mein convert karo
            let student = JSON.parse(savedData);

            // Profile page par data display karo
            displayProfile(student);

        }

        else {

            // Agar localStorage mein data nahi hai
            // to profile.json se data fetch karo

            let response = await fetch("profile.json");

            let student = await response.json();

            // Profile page par data display karo
            displayProfile(student);
        }

    }

    catch (error) {

        console.log("Error loading profile:", error);

    }

}



// Data ko HTML mein display karne ka function
function displayProfile(student) {

    // Name
    document.getElementById("profileName").innerText =
        student.name;


    // Department
    document.getElementById("profileDepartment").innerText =
        "Department of " + student.department;


    // Semester
    document.getElementById("profileSemester").innerText =
        "Semester " + student.semester;


    // Student ID
    document.getElementById("profileId").innerText =
        student.studentId;


    // Date of Birth
    document.getElementById("profileDob").innerText =
        formatDate(student.dob);


    // Email
    document.getElementById("profileEmail").innerText =
        student.email;


    // Phone
    document.getElementById("profilePhone").innerText =
        student.phone;


    // Branch / Department
    document.getElementById("profileDepartment2").innerText =
        student.department;


    // Address
    document.getElementById("profileAddress").innerText =
        student.address;

}



// Date format change karne ke liye
// 2007-09-17  →  17-09-2007

function formatDate(date) {

    let parts = date.split("-");

    return parts[2] + "-" + parts[1] + "-" + parts[0];

}