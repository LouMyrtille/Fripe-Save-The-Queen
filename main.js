
document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary elements
    var hamburgerButton = document.querySelector('.button-hamburger');
    var navigation = document.getElementById('nav-list');
    var hamburgerIcon = document.querySelector('.hamburger');
    var closeIcon = document.querySelector('.hamburger-close');

    // Add click event listener to the hamburger button
    hamburgerButton.addEventListener('click', function () {
        // Toggle the 'active' class on the navigation
        navigation.classList.toggle('active');

        // Toggle the visibility of hamburger and close icons
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});
