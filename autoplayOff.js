window.addEventListener('load', function(event) {
        const toggleButton = document.getElementsByClassName('ytp-autonav-toggle-button')[0];
        toggleButton.ariaChecked = false;
        toggleButton.removeAttribute('checked'); // not necessary. here for future-proodfing
        const parent = toggleButton.parentNode;
        parent.removeChild(toggleButton);
});