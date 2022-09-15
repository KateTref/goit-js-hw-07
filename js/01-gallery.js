import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


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
   

    if (!isPictureEl) {
        return;
    };
    
    const currentActivePicture = document.querySelector('img .is-active');
    event.target.classList.add('is-active');
   
    // const bigPictureUrl = 
    
    
    galleryItems.forEach(elem => {
        let originalUrl = elem.original;
        console.log(originalUrl);
    })
}