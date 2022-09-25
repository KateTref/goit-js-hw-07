import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createPicturesMarkup(Items) {
    return Items
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
          <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
          />
        </a>
        </div>
`}).join('');
};


function onGalleryContainerClick(event) {
    event.preventDefault();
    
    const isPictureEl = event.target.classList.contains('gallery__image');
    const urlOriginalPicture = event.target.dataset.source;

    if (!isPictureEl) {
        return;
    };
    
    const instance = basicLightbox.create(`
    <img src="${urlOriginalPicture}" width="1280" height="600">`);

    instance.show();
    
    
};