function hookValidateFormListener() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
}

function goToTopListener() {
    const goToTopButton = document.getElementById("go-to-top");
    goToTopButton.addEventListener("click", () => {
        document.scrollingElement.scrollTop = 0;
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            goToTopButton.classList.remove('d-none');
        } else {
            goToTopButton.classList.add('d-none');
        }
    });
}

function setScreenOrientation() {
    let orientation = window.screen.orientation;
    if (Object.hasOwn(orientation, "lock")) {
        console.log("has lock property");
        orientation.lock("portrait");
    }
}

document.addEventListener('DOMContentLoaded', setScreenOrientation);
document.addEventListener('DOMContentLoaded', hookValidateFormListener);
document.addEventListener('DOMContentLoaded', goToTopListener);

