/* Tech Advisory form submit button */
const techAdvFormBtn = document.getElementById("techAdvFormSubmit");
/* Tech Advisory form submit logic */
techAdvFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const modalRequest = new ContactRequest(
        document.getElementById("techAdvFormName").value,
        document.getElementById("techAdvFormPhone").value,
        document.getElementById("techAdvFormEmail").value,
        document.getElementById("techAdvFormMessage").value,
        document.getElementById("techAdvUserJob").value,
        document.getElementById("techAdvUserNeededServ").value,
        document.getElementById("techAdvUserContactMethod").value,
        document.getElementById("techAdvFormAgreement").value
    );
    console.log(modalRequest);
    console.log(modalRequest.toJson());
});
