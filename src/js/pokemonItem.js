export default function createGalleryItem({name, front_default, id}) {
    return `<li class="item-gallery" data-id=${id}>
                <img src="${front_default}" alt="photo of ${name}" class="img-gallery"/>
                <span class="pokemon-name">${name}</span>
            </li>`
};
