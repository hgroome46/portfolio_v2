
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




