import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onGalleryItemclick);

const createGalleryCardMarkup = ({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
            </a>
        </div>
        `
};


const createGalleryCards = galleryItems.map(createGalleryCardMarkup).join(' ');

galleryList.insertAdjacentHTML('beforeend', createGalleryCards);

function onGalleryItemclick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } 
}

const gallery = new SimpleLightbox('.gallery div a', {
    captionsData: 'alt',
    });

console.log(galleryItems);
