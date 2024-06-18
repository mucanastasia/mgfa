document.addEventListener("DOMContentLoaded", function () {
    const inviteForm = document.getElementById("invite-form");
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+-/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    inviteForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (emailInput.value === "") {
            alert("Email is empty");
        } else if (emailPattern.test(emailInput.value)) {
            alert("Welcome to the team!");
            emailInput.value = "";
        } else {
            alert("Email is invalid");
        }
    });

    // I didn’t add a separate handler for Enter key because most modern browsers already automatically submit forms when it is pressed
});