/* Tech Advisory form submit button */
const techAdvFormBtn = document.getElementById("techAdvFormSubmit");
/* Tech Advisory form submit logic */
techAdvFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Check the validity of inputs */
    const isFormValid = document.getElementById("techAdvForm").checkValidity();
    if (!isFormValid) {
        /* If form is not valid, use the usual way to report it to the user */
        document.getElementById("techAdvForm").reportValidity();
    } else {
        /* Populating the form */
        const techAdvFormData = new ContactRequest(
            document.getElementById("techAdvFormName").value,
            document.getElementById("techAdvFormPhone").value,
            document.getElementById("techAdvFormEmail").value,
            document.getElementById("techAdvFormMessage").value,
            document.getElementById("techAdvUserJob").value,
            document.getElementById("techAdvUserNeededServ").value,
            document.getElementById("techAdvUserContactMethod").value,
            document.getElementById("techAdvFormAgreement").checked
        );

        /* Logging */
        techAdvFormData.logs();

        /* Sending form to server */
        techAdvFormData.sendToServer();

        /* Resetting the form */
        document.getElementById("techAdvForm").reset();
    }
});
