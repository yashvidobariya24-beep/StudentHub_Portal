
window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    if (params.get("login") === "success") {

        const popup = document.getElementById("successPopup");

        popup.style.display = "block";

        setTimeout(function () {
            popup.style.display = "none";
        }, 3000);
    }

};