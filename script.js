// Function to generate random positions
function getRandomPosition(element) {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Get the dimensions of the element
    var elementWidth = element.offsetWidth;
    var elementHeight = element.offsetHeight;

    // Generate random positions within the bounds of the viewport
    var randomX = Math.floor(Math.random() * (viewportWidth - elementWidth));
    var randomY = Math.floor(Math.random() * (viewportHeight - elementHeight));

    return [randomX, randomY];
}

// Function to apply random positions to elements
function randomizePosition() {
    var box1 = document.getElementById('henry');
    var box2 = document.getElementById('portfolio');

    // Get random positions for both boxes
    var position1 = getRandomPosition(box1);
    var position2 = getRandomPosition(box2);

    // Apply random positions to both boxes
    box1.style.left = position1[0] + 'px';
    box1.style.top = position1[1] + 'px';

    box2.style.left = position2[0] + 'px';
    box2.style.top = position2[1] + 'px';


}

// Run the randomization function when the page loads
window.onload = randomizePosition;

// Run the randomization function whenever the window is resized
window.onresize = randomizePosition;

function refreshPage() {
    window.location.reload();
}

