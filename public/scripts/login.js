// Showing password
const viewPassordButton = document.querySelector(".view-password");
const viewPassordButtonIcon = document.querySelector(".view-password > i");
const passwordField = document.querySelector("#password");
viewPassordButton.addEventListener("click", function () {
    if ( passwordField.type == "password") {
        passwordField.type = "text"
        viewPassordButtonIcon.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        passwordField.type = "password"
        viewPassordButtonIcon.classList.replace("fa-eye-slash", "fa-eye")
    }
});
