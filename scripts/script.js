document.addEventListener("DOMContentLoaded", function () {
    const inviteForm = document.getElementById("invite-form");
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+-/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    inviteForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (emailInput.value === "") {
            alert("The email field is empty.");
        } else if (emailPattern.test(emailInput.value)) {
            alert("Welcome to the team!");
            emailInput.value = "";
        } else {
            alert("Email is invalid");
        }
    });

    // Most modern browsers automatically submit forms when the Enter key is pressed within a form input field.
});