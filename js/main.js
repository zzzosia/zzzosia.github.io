/* =========================================================
   CATCHING THE SKY JAVASCRIPT
========================================================= */

const header = document.querySelector(".site-header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   MOBILE
========================================================= */

const mobileButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");


if (mobileButton && navLinks) {

    mobileButton.setAttribute("aria-expanded", "false");

    mobileButton.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("mobile-open");

        mobileButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        mobileButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });

}

if (navLinks && mobileButton) {

    const links =
        navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}
