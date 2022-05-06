/* Tech advisory form submit button */
const techAdvFormBtn = document.getElementById("techAdvFormSubmit");
/* Tech advisory form submit logic */
techAdvFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const techAdvRequest = new ContactRequest(
        document.getElementById("techAdvFormName").value,
        document.getElementById("techAdvFormEmail").value,
        document.getElementById("techAdvFormPhone").value,
        document.getElementById("techAdvFormMessage").value,
        document.getElementById("techAdvUserJob").value,
        document.getElementById("techAdvUserNeededServ").value,
        document.getElementById("techAdvUserContactMethod").value,
        document.getElementById("techAdvFormAgreement").value
    );
    console.log(techAdvRequest);
    console.log(techAdvRequest.toJson());
});
