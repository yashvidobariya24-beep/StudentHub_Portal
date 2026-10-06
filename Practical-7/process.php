<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Invalid request.");
}

$name = trim($_POST["fullname"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$password = $_POST["password"] ?? "";
$confirmPassword = $_POST["confirmPassword"] ?? "";
$birthdate = trim($_POST["birthdate"] ?? "");
$gender = trim($_POST["gender"] ?? "");
$program = trim($_POST["program"] ?? "");
$residence = trim($_POST["residence"] ?? "");
$terms = $_POST["terms"] ?? "";
$skills = $_POST["skills"] ?? [];

$errors = [];

if ($name === "") {
    $errors[] = "Full name is required.";
} elseif (!preg_match("/^[A-Za-z ]{3,40}$/", $name)) {
    $errors[] = "Enter a valid name.";
}

if ($email === "") {
    $errors[] = "Email is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Enter a valid email address.";
}

if ($phone === "") {
    $errors[] = "Phone number is required.";
} elseif (!preg_match("/^[0-9]{10}$/", $phone)) {
    $errors[] = "Enter a valid 10-digit phone number.";
}

if ($password === "") {
    $errors[] = "Password is required.";
} elseif (!preg_match("/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/", $password)) {
    $errors[] = "Password must contain at least 8 characters, one letter and one number.";
}

if ($password !== $confirmPassword) {
    $errors[] = "Password does not match.";
}

if ($birthdate === "") {
    $errors[] = "Date of birth is required.";
}

if ($gender === "") {
    $errors[] = "Please select your gender.";
}

if ($program === "") {
    $errors[] = "Please select your degree program.";
}

if ($terms !== "accepted") {
    $errors[] = "Please accept the terms and conditions.";
}

if (!is_array($skills)) {
    $skills = [];
}

if (!empty($errors)) {

    echo "<h2>Registration Failed</h2>";

    foreach ($errors as $error) {
        echo "<p>" . htmlspecialchars($error) . "</p>";
    }

    echo "<a href='../Signup.html'>Go Back</a>";

    exit;
}

$name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$email = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$phone = htmlspecialchars($phone, ENT_QUOTES, "UTF-8");
$birthdate = htmlspecialchars($birthdate, ENT_QUOTES, "UTF-8");
$gender = htmlspecialchars($gender, ENT_QUOTES, "UTF-8");
$program = htmlspecialchars($program, ENT_QUOTES, "UTF-8");
$residence = htmlspecialchars($residence, ENT_QUOTES, "UTF-8");

$skills = array_map(function ($skill) {
    return htmlspecialchars($skill, ENT_QUOTES, "UTF-8");
}, $skills);


/* JSON FILE */

$file = __DIR__ . "/students.json";


/* READ EXISTING DATA */

if (file_exists($file)) {

    $data = file_get_contents($file);

    $students = json_decode($data, true);

    if (!is_array($students)) {
        $students = [];
    }

} else {

    $students = [];

}


/* CREATE NEW RECORD */

$newStudent = [
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "birthdate" => $birthdate,
    "gender" => $gender,
    "program" => $program,
    "skills" => $skills,
    "residence" => $residence,
    "terms" => "Accepted"
];


/* ADD RECORD */

$students[] = $newStudent;


/* SAVE JSON */

$jsonData = json_encode($students, JSON_PRETTY_PRINT);

if (file_put_contents($file, $jsonData, LOCK_EX) === false) {
    die("Error: Unable to save data.");
}


/* SUCCESS MESSAGE */

echo "
<!DOCTYPE html>

<html>

<head>

    <meta charset='UTF-8'>

    <title>Registration Successful</title>

</head>

<body>

    <h2>Registration Successful!</h2>

    <p>Your registration has been submitted successfully.</p>

    <p>Your data has been saved in students.json.</p>

    <a href='../Signup.html'>Go Back to Signup</a>

</body>

</html>
";

?>