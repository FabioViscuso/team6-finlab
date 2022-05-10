/* Main form class */
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

    sendToServer() {
        fetch("http://127.0.0.1:5000/data", {
            method: "post",
            body: JSON.stringify(this),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    }

    toJson() {
        return JSON.stringify(this);
    }
}

/* Offcanvas callback form class */
class CallbackRequest extends ContactRequest {
    constructor(fullName, phone) {
        super(fullName, phone);
    }
}

/* Footer newsletter form class */
class NewsletterRequest extends ContactRequest {
    constructor(fullName, phone, email) {
        super(fullName, phone, email);
        this.firstName = undefined;
        this.lastName = undefined;
    }
}

/* Offcanvas form submit button */
const offcanvBtn = document.getElementById("offcanvasFormSubmit");
/* Offcanvas form submit logic */
offcanvBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Populating the form */
    const newCallbackRequest = new CallbackRequest(
        document.getElementById("offcanvasName").value,
        document.getElementById("offcanvasPhone").value
    );

    /* Logging */
    console.table(newCallbackRequest);
    console.log(newCallbackRequest.toJson());

    /* Sending to server */
    newCallbackRequest.sendToServer();
});

/* Modal form submit button */
const modalBtn = document.getElementById("modalFormSubmit");
/* Modal form submit logic */
modalBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Populating the form */
    const modalRequest = new ContactRequest(
        document.getElementById("modalFormName").value,
        document.getElementById("modalFormPhone").value,
        document.getElementById("modalFormEmail").value,
        document.getElementById("modalFormMessage").value,
        document.getElementById("modalUserJob").value,
        document.getElementById("modalUserNeededServ").value,
        document.getElementById("modalUserContactMethod").value,
        document.getElementById("modalFormCommunicationsAgreement").checked
    );

    /* Logging */
    console.table(modalRequest);
    console.log(modalRequest.toJson());

    /* Sending to server */
    modalRequest.sendToServer();
});

/* Newsletter form submit button */
const newsletterBtn = document.getElementById("newsletterSubmit");
/* Newsletter form submit logic */
newsletterBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Populating the form */
    const newsletterReq = new NewsletterRequest(
        "",
        undefined,
        document.getElementById("newsletterApply").value
    );

    /* Logging */
    console.table(newsletterReq);
    console.log(newsletterReq.toJson());

    /* Sending to server */
    newsletterReq.sendToServer();
});
