// ================= DARK MODE =================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "Light Mode";

    } else {

        themeButton.textContent = "Dark Mode";

    }

});


// ================= PROJECT FILTER =================

const buttons = document.querySelectorAll(".filter-button");

const projects = document.querySelectorAll(".project");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const type = button.getAttribute("data-type");


        projects.forEach((project) => {

            if (type === "all") {

                project.style.display = "block";

            } else if (
                project.getAttribute("data-type") === type
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let valid = true;


    // Name validation

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    // Email validation

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!email.includes("@")) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    }


    // Successful submission

    if (valid) {

        successMessage.textContent =
            "Message submitted successfully!";

        form.reset();

    }

});