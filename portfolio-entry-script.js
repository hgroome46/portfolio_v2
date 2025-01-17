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

// Function to apply random colors to home button
function applyRandomColors() {
    const colorPalette = ["#FFB3C7", "#B3E7FF", "#B3FFF2", "#FFFFB3", "#FFDEB3", "#DEB3FF"];

    const homeButtons = document.querySelectorAll('.home-button');
    homeButtons.forEach(element => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        element.style.color = randomColor;
    });
}

// Function to apply random colors to custom-link
function applyRandomColors2() {
    const colorPalette = ["#FFB3C7", "#B3E7FF", "#B3FFF2", "#FFFFB3", "#FFDEB3", "#DEB3FF"];

    const customLinks = document.querySelectorAll('.custom-link');
    customLinks.forEach(link => {
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        link.style.color = randomColor;
    });
}

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

                const artPieceTitle = image.title || "Portfolio Entry";
                document.getElementById('art-piece-title').innerText = artPieceTitle;
                document.getElementById('art-piece-date').innerText = image.date || "";

                // Set page title to match art-piece-title
                document.title = artPieceTitle;

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
                    } else if (otherMedia.class === "real-size-container") {
                        const realSizeItem = document.createElement('div');
                        realSizeItem.classList.add('real-size-item');

                        const imgElement = document.createElement('img');
                        imgElement.src = otherMedia.image_path;

                        // Maintain original aspect ratio
                        imgElement.style.objectFit = "contain";
                        imgElement.style.width = "100%";
                        imgElement.style.height = "auto";

                        realSizeItem.appendChild(imgElement);
                        otherImagesGallery.appendChild(realSizeItem);
                    } else {
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

                // Apply random colors to custom-link elements
                applyRandomColors2();
            } else {
                document.getElementById('art-piece-title').innerText = "Media Not Found";
            }
        }
    })
    .catch(error => console.error("Error loading portfolio data:", error));

let lastScrollPosition = 0;
const backArrow = document.querySelector('.back-arrow');
const homeButton = document.querySelector('.home-button');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        backArrow.style.opacity = '0';
        homeButton.style.opacity = '0';
    } else {
        backArrow.style.opacity = '1';
        homeButton.style.opacity = '1';
    }

    lastScrollPosition = currentScrollPosition;
});

window.onload = function () {
    applyRandomColors(); // Apply colors to home button
    applyRandomColors2(); // Apply colors to custom links
};
