document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thanks, " + name + "! 🚀\n\n" +
            "Your message has been received by FLOWZA."
        );

        contactForm.reset();
    });

});
