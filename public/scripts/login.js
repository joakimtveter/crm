// Showing password
const viewPassordButton = document.querySelector(".view-password");
const passwordField = document.querySelector("#password");
viewPassordButton.addEventListener("click", function(e) {
    e.preventDefault()
    if ( passwordField.type == "password") {
        passwordField.type = "text"
        viewPassordButton.innerHTML = "Hide Password"
    } else {
        passwordField.type = "password"
        viewPassordButton.innerHTML = "Show Password"
    }
});
