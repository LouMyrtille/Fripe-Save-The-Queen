
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

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background-video');
    var button = document.getElementById('toggle-button');
    var isPlaying = true;

    button.addEventListener('click', function () {
        if (isPlaying) {
            video.pause();
            isPlaying = false;
            button.classList.remove('pause');
            button.classList.add('play');
        } else {
            video.play();
            isPlaying = true;
            button.classList.remove('play');
            button.classList.add('pause');
        }
    });
});

function resizeImage(element) {
    element.classList.add('resized');
}

function restoreImage(element) {
    if (element.classList.contains('resized')) {
        element.classList.remove('resized');
    }
}


function play(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
}

function pause(soundId) {
    var sound = document.getElementById(soundId);
    sound.pause();
}

function restart(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0; // Set the current time to the beginning
    sound.play();
}

