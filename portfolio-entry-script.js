// Function to get URL parameters
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Map custom positions for specific image IDs
const customPositions = {
    fine_art_3: "50% 70%",
    graphic_design_2: "50% 50%",
    graphic_design_4: "50% 45%",
    graphic_design_7: "50% 50%",
    graphic_design_5: "50% 40%",
    product_design_3: "50% 40%",
    product_design_5: "50% 40%",
    product_design_1: "50% 40%",
    product_design_2: "50% 50%",
    fine_art_4: "50% 10%",
    product_design_7: "50% 75%"
};

// Fetch and load data
fetch('portfolio-data.json')
    .then(response => response.json())
    .then(data => {
        const galleryId = getParameterByName('gallery');
        const imageId = getParameterByName('image');

        const gallery = data.galleries.find(g => g.id === galleryId);

        if (gallery) {
            const image = gallery.images.find(img => img.id === imageId);

            if (image) {
                // Populate header media
                const artPieceImage = document.getElementById('art-piece-image');
                const artPieceVideo = document.getElementById('art-piece-video');

                if (image.video_path) {
                    artPieceVideo.src = image.video_path;
                    artPieceVideo.style.display = "block";
                    artPieceImage.style.display = "none";
                } else {
                    artPieceImage.src = image.image_path;
                    artPieceImage.style.display = "block";
                    artPieceVideo.style.display = "none";
                }

                document.getElementById('art-piece-title').innerText = image.title || "";
                document.getElementById('art-piece-date').innerText = image.date || "";

                // Render description with potential hyperlinks
                const descriptionElement = document.getElementById('art-piece-description');
                descriptionElement.innerHTML = image.description || "";

                const fullSizeContainer = document.getElementById('full-size-container');
                const fullSizeAfterContainer = document.getElementById('full-size-after-container');
                const otherImagesGallery = document.getElementById('other-images-gallery');

                let hasFullSizeAfter = false;

                gallery.images.forEach(otherMedia => {
                    if (otherMedia.id === imageId) return; // Skip the header media

                    if (otherMedia.class === "full-size") {
                        // Handle full-size media before the gallery
                        const fullSizeItem = document.createElement('div');
                        if (otherMedia.video_path) {
                            const videoElement = document.createElement('video');
                            videoElement.src = otherMedia.video_path;
                            videoElement.controls = true;
                            fullSizeItem.appendChild(videoElement);
                        } else {
                            const imgElement = document.createElement('img');
                            imgElement.src = otherMedia.image_path;
                            fullSizeItem.appendChild(imgElement);
                        }

                        fullSizeContainer.appendChild(fullSizeItem);
                    } else if (otherMedia.class === "full-size-after") {
                        hasFullSizeAfter = true;

                        // Handle full-size media after the gallery
                        const fullSizeAfterItem = document.createElement('div');
                        if (otherMedia.video_path) {
                            const videoElement = document.createElement('video');
                            videoElement.src = otherMedia.video_path;
                            videoElement.controls = true;
                            fullSizeAfterItem.appendChild(videoElement);
                        } else {
                            const imgElement = document.createElement('img');
                            imgElement.src = otherMedia.image_path;
                            fullSizeAfterItem.appendChild(imgElement);
                        }

                        fullSizeAfterContainer.appendChild(fullSizeAfterItem);
                    } else {
                        // Regular gallery item
                        const galleryItem = document.createElement('div');
                        galleryItem.classList.add('gallery-item');
                        if (otherMedia.video_path) {
                            const videoElement = document.createElement('video');
                            videoElement.src = otherMedia.video_path;
                            videoElement.controls = true;
                            galleryItem.appendChild(videoElement);
                        } else {
                            const imgElement = document.createElement('img');
                            imgElement.src = otherMedia.image_path;
                            galleryItem.appendChild(imgElement);
                        }

                        otherImagesGallery.appendChild(galleryItem);
                    }
                });

                // Adjust gallery spacing if full-size-after exists
                if (hasFullSizeAfter) {
                    otherImagesGallery.style.marginBottom = "16px"; // Reduce spacing to full-size-after
                }

                // Add parallax effect
                document.addEventListener("scroll", () => {
                    const scrollPosition = window.scrollY;
                    const windowHeight = window.innerHeight;
                    const position =
                        parseInt(customPositions[imageId]?.split(" ")[1] || "30") +
                        (scrollPosition / windowHeight) * 30;
                    artPieceImage.style.objectPosition = `50% ${position}%`;
                });
            } else {
                document.getElementById('art-piece-title').innerText = "Media Not Found";
            }
        }
    })
    .catch(error => console.error("Error loading portfolio data:", error));

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