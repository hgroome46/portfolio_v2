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

window.onload = function () {
    applyRandomColors();
};