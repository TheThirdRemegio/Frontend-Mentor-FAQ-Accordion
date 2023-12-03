function toggleResponse(button) {
    // Toggle response
    let response = button.nextElementSibling;
    if (!response.classList.contains('show')) {
        // Reset other responses
        let responses = document.querySelectorAll('.response');
        responses.forEach(element => {
            element.classList.remove('show');
        })

        // Toggle current response
        response.classList.add('show');
    } else {
        response.classList.remove('show');
    };

    // Toggle icon
    let image = button.querySelector('img');
    if (image.getAttribute('src') == './assets/images/icon-plus.svg') {
        // Reset other icons
        let icons = document.querySelectorAll('.toggle-icon');
        icons.forEach(element => {
            element.setAttribute('src', './assets/images/icon-plus.svg');
        });

        // Toggle current icon
        image.src = "./assets/images/icon-minus.svg";
    } else {
        image.src = "./assets/images/icon-plus.svg";
    }
}