
function applyRandomColors() {
    const colorPalette = ["#FFB3C7", "#B3E7FF", "#B3FFF2", "#FFFFB3", "#FFDEB3", "#DEB3FF"];

    // Apply random colors to elements with the custom-link class
    const customLinks = document.querySelectorAll('.custom-link');
    customLinks.forEach(link => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        link.style.color = randomColor;
    });

    // Apply random colors to elements with the random-color class
    const randomColorElements = document.querySelectorAll('.random-color');
    randomColorElements.forEach(element => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        element.style.color = randomColor;
    });

    // const aboutPageLinks = document.querySelectorAll('.about-page-link');
    // aboutPageLinks.forEach(element => {
    //     const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    //     element.style.color = randomColor;
    // });
    //
    // const aboutPageLinks2 = document.querySelectorAll('.about-page-link2');
    // aboutPageLinks2.forEach(element => {
    //     const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    //     element.style.color = randomColor;
    // });
    //
    // const aboutPageLinks3 = document.querySelectorAll('.about-page-link3');
    // aboutPageLinks3.forEach(element => {
    //     const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    //     element.style.color = randomColor;
    // });
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
// Run the function on page load
window.onload = applyRandomColors;