const newsletterBtn = document.getElementById("newsletterSubmit");

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
