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
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    }

    logs() {
        console.table(this);
        console.log(`Serialized: `, this.toJson());
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

    /* Check the validity of inputs */
    const isFormValid = document.getElementById("offcanvForm").checkValidity();
    if (!isFormValid) {
        /* If form is not valid, use the usual way to report it to the user */
        document.getElementById("offcanvForm").reportValidity();
    } else {
        /* Populating the form */
        const newCallbackRequest = new CallbackRequest(
            document.getElementById("offcanvasName").value,
            document.getElementById("offcanvasPhone").value
        );

        /* Logging */
        newCallbackRequest.logs();

        /* Sending to server */
        newCallbackRequest.sendToServer();

        /* Resetting the form */
        document.getElementById("offcanvForm").reset();
    }
});

/* Modal form submit button */
const modalBtn = document.getElementById("modalFormSubmit");
/* Modal form submit logic */
modalBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Check the validity of inputs */
    const isFormValid = document.getElementById("modalForm").checkValidity();
    if (!isFormValid) {
        /* If form is not valid, use the usual way to report it to the user */
        document.getElementById("modalForm").reportValidity();
    } else {
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
        modalRequest.logs();

        /* Sending to server */
        modalRequest.sendToServer();

        /* Resetting the form */
        document.getElementById("modalForm").reset();
    }
});

/* Newsletter form submit button */
const newsletterBtn = document.getElementById("newsletterSubmit");
/* Newsletter form submit logic */
newsletterBtn.addEventListener("click", (event) => {
    event.preventDefault();

    /* Check the validity of inputs */
    const isFormValid = document
        .getElementById("newsletterForm")
        .checkValidity();
    if (!isFormValid) {
        /* If form is not valid, use the usual way to report it to the user */
        document.getElementById("newsletterForm").reportValidity();
    } else {
        /* Populating the form */
        const newsletterReq = new NewsletterRequest(
            "",
            undefined,
            document.getElementById("newsletterApply").value
        );

        /* Logging */
        newsletterReq.logs();

        /* Sending to server */
        newsletterReq.sendToServer();

        /* Resetting the form */
        document.getElementById("newsletterForm").reset();
    }
});
