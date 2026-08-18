const successPopup = document.getElementById("successPopup");

const params = new URLSearchParams(window.location.search);

if (params.get("login") === "success") {

    successPopup.style.display = "block";

    setTimeout(function () {

        successPopup.style.display = "none";

    }, 5000);

}