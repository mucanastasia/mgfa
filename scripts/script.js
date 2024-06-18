document.addEventListener("DOMContentLoaded", function () {
    const inviteForm = document.getElementById("invite-form");
    const emailInput = document.getElementById("email");
    const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

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