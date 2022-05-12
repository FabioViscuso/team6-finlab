/* Contact-us form submit button */
const contactUsFormBtn = document.getElementById("contactUsFormSubmit");
/* Contact-us form submit logic */
contactUsFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Check the validity of inputs */
    const isFormValid = document.getElementById("contactUsForm").checkValidity();
    if (!isFormValid) {
        /* If form is not valid, use the usual way to report it to the user */
        document.getElementById("contactUsForm").reportValidity();
    } else {
        /* Populating the form */
        const contactUsForm = new ContactRequest(
            document.getElementById("contactUsFormName").value,
            document.getElementById("contactUsFormPhone").value,
            document.getElementById("contactUsFormEmail").value,
            document.getElementById("contactUsFormMessage").value,
            document.getElementById("contactUsUserJob").value,
            document.getElementById("contactUsUserNeededServ").value,
            document.getElementById("contactUsUserContactMethod").value,
            document.getElementById("contactUsFormAgreement").checked
        );

        /* Logging */
        console.table(contactUsForm);
        console.log(contactUsForm.toJson());

        /* Sending form to server */
        contactUsForm.sendToServer();
    }
});
