/* =========================================================
   CATCHING THE SKY JAVASCRIPT
========================================================= */

const navbarContainer = document.querySelector("#navbar");

if (navbarContainer) {

    const navbarPath =
    window.location.pathname.includes("/our-dogs/")
        ? "../components/navbar.html"
        : "./components/navbar.html";

fetch(navbarPath)
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    `Navbar could not be loaded: ${response.status}`
                );
            }

            return response.text();
        })
        .then(data => {

            navbarContainer.innerHTML = data;

const header =
    document.querySelector(".site-header");

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


/* =========================
   MOBILE
========================= */

const mobileButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");

if (mobileButton && navLinks) {

    mobileButton.setAttribute(
        "aria-expanded",
        "false"
    );

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

            const currentPage =
                document.body.dataset.page;

            const dogsPages = [
                "dogs",
                "hauru",
                "jimmy",
                "marley"
            ];

            const littersPages = [
                "litters"
            ];


            /* =========================
               ACTIVE NAV
            ========================= */

            if (dogsPages.includes(currentPage)) {

                document
                    .querySelector(".nav-dropdown-dogs")
                    ?.classList.add("active");

            }

            if (littersPages.includes(currentPage)) {

                document
                    .querySelector(".nav-dropdown-litters")
                    ?.classList.add("active");

            }

        })
        .catch(error => {
            console.error("Could not load navbar:", error);
        });

}