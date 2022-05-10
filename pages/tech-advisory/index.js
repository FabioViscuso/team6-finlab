/* Tech Advisory form submit button */
const techAdvFormBtn = document.getElementById("techAdvFormSubmit");
/* Tech Advisory form submit logic */
techAdvFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Populating the form */
    const techAdvForm = new ContactRequest(
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
    console.table(techAdvForm);
    console.log(techAdvForm.toJson());

    /* Sending form to server */
    techAdvForm.sendToServer();
});
