document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const business = document.getElementById("business").value;
        const message = document.getElementById("message").value;

        const webhookURL = "https://drillo4.app.n8n.cloud/
webhook-test/flowza-leads";

        try {

            const response = await fetch(webhookURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    business: business,
                    message: message
                })
            });

            if (!response.ok) {
                throw new Error("Webhook request failed");
            }

            alert(
                "Thanks, " + name + "! 🚀\n\n" +
                "Your message has been sent to FLOWZA."
            );

            contactForm.reset();

        } catch (error) {

            console.error(error);

            alert(
                "Oops! Something went wrong.\n\n" +
                "Please try again."
            );
        }

    });

});
