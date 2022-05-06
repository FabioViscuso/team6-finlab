class ContactRequest {
    constructor(
        fullName,
        phone,
        email,
        message,
        userJob,
        neededServ,
        contactMethod,
        agreement
    ) {
        [this.firstName, this.lastName] = fullName.split(" ");
        this.phone = phone;
        this.email = email;
        this.message = message;
        this.userJob = userJob;
        this.neededServ = neededServ;
        this.contactMethod = contactMethod;
        this.agreement = agreement;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
class CallbackRequest extends ContactRequest {
    constructor(fullName, phone) {
        super(fullName, phone);
    }
}

const offcanvBtn = document.getElementById("offcanvasFormSubmit");
offcanvBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newCallbackRequest = new CallbackRequest(
        document.getElementById("offcanvasName").value,
        document.getElementById("offcanvasPhone").value
    );
    console.log(newCallbackRequest);
    console.log(newCallbackRequest.toJson());
});

const modalBtn = document.getElementById("modalFormSubmit");
modalBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const modalRequest = new ContactRequest(
        document.getElementById("modalFormName").value,
        document.getElementById("modalFormPhone").value,
        document.getElementById("modalFormEmail").value,
        document.getElementById("modalFormMessage").value,
        document.getElementById("modalUserJob").value,
        document.getElementById("modalUserNeededServ").value,
        document.getElementById("modalUserContactMethod").value,
        document.getElementById("modalFormCommunicationsAgreement").value
    );
    console.log(modalRequest);
    console.log(modalRequest.toJson());
});

const techAdvFormBtn = document.getElementById("techAdvFormSubmit");
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
