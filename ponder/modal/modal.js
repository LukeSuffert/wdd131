const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener to open modal when an image is clicked
gallery.addEventListener('click', openModal);

function openModal(e) {

    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src.replace('-sm','-full');
        modalImage.alt = e.target.alt;
        modal.showModal();

    // Code to show modal - use event parameter "e"

}

//Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
})

// Close modal if user clicks outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});}