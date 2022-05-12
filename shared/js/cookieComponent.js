class CookieComponent extends HTMLElement {
    constructor() {
        super();

        /* Create shadow DOM */
        const component = this.attachShadow({ mode: "open" });

        /* Create elements */
        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", "/shared/css/cookieComponent.css");
        component.append(css);

        const designCss = document.createElement("link");
        designCss.setAttribute("rel", "stylesheet");
        designCss.setAttribute("type", "text/css");
        designCss.setAttribute("href", "/shared/css/design.css");
        component.append(designCss);

        const bootstrap = document.createElement("link");
        bootstrap.setAttribute("rel", "stylesheet");
        bootstrap.setAttribute("type", "text/css");
        bootstrap.setAttribute(
            "href",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        );
        component.append(bootstrap);

        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "cookieWrapper");

        const policy = document.createElement("p");
        policy.innerText = "Accept Cookies?";
        policy.setAttribute("class", "txt-white txt-weight-600 m-0");

        const accept = document.createElement("button");
        accept.innerText = "Accept";
        accept.setAttribute(
            "class",
            "cookieSelectionBtn cookieSelectionBtn--accept"
        );

        const refuse = document.createElement("button");
        refuse.innerText = "Refuse";
        refuse.setAttribute("class", "cookieSelectionBtn");

        /* Append elements via DOM manipulation */
        component.append(wrapper);
        wrapper.append(policy);
        wrapper.append(refuse);
        wrapper.append(accept);

        accept.addEventListener("click", () => {
            console.log("Cookies accepted");
            localStorage.setItem("cookie-preference", "accepted");
            wrapper.style.display = "none";
        });

        refuse.addEventListener("click", () => {
            console.log("Cookies refused");
            localStorage.setItem("cookie-preference", "refused");
            wrapper.style.display = "none";
        });

        window.addEventListener("DOMContentLoaded", () => {
            if (localStorage.getItem("cookie-preference")) {
                wrapper.style.display = "none";
            }
        });
    }
}
customElements.define("cookie-component", CookieComponent);
