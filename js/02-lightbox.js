import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createPicturesMarkup(Items) {
    return Items
        .map(({ preview, original, description }) => {
            return `
       <li class="galllery__item>
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
       </li>
`}).join('');
};

 const lightbox = new SimpleLightbox('.gallery li', { captionsData: "alt", captionsDelay: 250 });

function onGalleryContainerClick(event) {
    event.preventDefault();
    
    const isPictureEl = event.target.classList.contains('gallery__image');

    if (!isPictureEl) {
        return;
    };
};