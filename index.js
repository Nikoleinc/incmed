let isMenuOpen = false;

function onMenuClick() {
    if (isMenuOpen) {
        isMenuOpen = false;
        document.getElementById("menuitems").style.display = "none"
    } else {
        isMenuOpen = true;
        document.getElementById("menuitems").style.display = "block"
    }
}

function submitForm() {
    const wounddressing = document.getElementById("wounddressing").checked;
    const woundundressing = document.getElementById("woundundressing").checked;
    const sutureremoval = document.getElementById("sutureremoval").checked;
    const staplesremoval = document.getElementById("staplesremoval").checked;

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const message = document.getElementById("message").value;

    let formtext = "Services selected:\n";
    if (wounddressing) {
        formtext = formtext + "- Wound Dressing\n";
    }
    if (woundundressing) {
        formtext = formtext + "- Wound Undressing\n";
    }
    if (sutureremoval) {
        formtext = formtext + "- Suture Removal\n";
    }
    if (staplesremoval) {
        formtext = formtext + "- Staples Removal\n";
    }

    formtext = formtext + "\n"
    formtext = formtext + "Full Name: " + fullname + "\n";
    formtext = formtext + "Email: " + email + "\n";
    formtext = formtext + "Phone Number: " + phonenumber + "\n";
    formtext = formtext + "Message: " + message + "\n";

    dialogmessage = "Submission confirmation with the following details:\n"
        + formtext
        + "\n"
        + "Our staff will be in contact with you to discuss your query or to arrange an appointment."

    alert(dialogmessage);
}