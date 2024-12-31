function showText(element) {
    const image = element.querySelector('.grid-image'); // Select the image inside the <a> tag
    const textBox = element.querySelector('.hover-text'); // Select the hover text inside the <a> tag

    image.style.opacity = '0.1'; // Set image opacity to 10%
    textBox.style.display = 'block'; // Show the hover text box
}

function hideText(element) {
    const image = element.querySelector('.grid-image'); // Select the image inside the <a> tag
    const textBox = element.querySelector('.hover-text'); // Select the hover text inside the <a> tag

    image.style.opacity = '1'; // Reset image opacity to 100%
    textBox.style.display = 'none'; // Hide the hover text box
}

function applyRandomColors() {
    const colorPalette = ["#FFB3C7", "#B3E7FF", "#B3FFF2", "#FFFFB3", "#FFDEB3", "#DEB3FF"];

    // Apply random colors to elements with the random-color class
    const applyRandomColors = document.querySelectorAll('.home-button');
    applyRandomColors.forEach(element => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        element.style.color = randomColor;
    });
}

let lastScrollPosition = 0;
const backArrow = document.querySelector('.back-arrow');
const homeButton = document.querySelector('.home-button');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    // Hide buttons on scroll down, show on scroll up
    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        backArrow.style.opacity = '0';
        homeButton.style.opacity = '0';
    } else {
        // Scrolling up
        backArrow.style.opacity = '1';
        homeButton.style.opacity = '1';
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
});

window.onload = function () {
    applyRandomColors();
};