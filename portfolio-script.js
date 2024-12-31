
function showText(element) {
    const portfolioItem = element.closest('.portfolio-item');
    const image = portfolioItem.querySelector('img');
    const textBox = portfolioItem.querySelector('.hover-text');
    const titleLink = portfolioItem.querySelector('.text-box-link'); // Get the title link

    image.style.opacity = '0.1'; // Set image opacity to 10%
    textBox.style.display = 'block'; // Show the hover text box
    titleLink.style.textDecoration = 'underline'; // Underline the title link
}

function hideText(element) {
    const portfolioItem = element.closest('.portfolio-item');
    const image = portfolioItem.querySelector('img');
    const textBox = portfolioItem.querySelector('.hover-text');
    const titleLink = portfolioItem.querySelector('.text-box-link'); // Get the title link

    image.style.opacity = '1'; // Reset image opacity to 100%
    textBox.style.display = 'none'; // Hide the hover text box
    titleLink.style.textDecoration = 'none'; // Remove underline from title link
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


