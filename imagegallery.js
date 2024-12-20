const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

const openModal = (index) => {
    modal.style.display = 'flex';
    modalImage.src = galleryImages[index].src;
    currentIndex = index;
};

const closeModalHandler = () => {
    modal.style.display = 'none';
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
};

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

closeModal.addEventListener('click', closeModalHandler);

prevButton.addEventListener('click', showPrevImage); 
nextButton.addEventListener('click', showNextImage);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});