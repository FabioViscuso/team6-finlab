/* Main form class */
export class ContactRequest {
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

/* Offcanvas callback form class */
export class CallbackRequest extends ContactRequest {
    constructor(fullName, phone) {
        super(fullName, phone);
    }
}

/* Footer newsletter form class */
export class NewsletterRequest extends ContactRequest {
    constructor(fullName, phone, email) {
        super(fullName, phone, email);
        this.firstName = undefined;
        this.lastName = undefined;
    }
}

/* Offcanvas form submit button */
export const offcanvBtn = document.getElementById("offcanvasFormSubmit");
/* Offcanvas form submit logic */
offcanvBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newCallbackRequest = new CallbackRequest(
        document.getElementById("offcanvasName").value,
        document.getElementById("offcanvasPhone").value
    );
    console.log(newCallbackRequest);
    console.log(newCallbackRequest.toJson());
});

/* Modal form submit button */
export const modalBtn = document.getElementById("modalFormSubmit");
/* Modal form submit logic */
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

/* Newsletter form submit button */
export const newsletterBtn = document.getElementById("newsletterSubmit");
/* Newsletter form submit logic */
newsletterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newsletterReq = new NewsletterRequest(
        "",
        undefined,
        document.getElementById("newsletterApply").value
    );
    console.log(newsletterReq);
    console.log(newsletterReq.toJson());
});
