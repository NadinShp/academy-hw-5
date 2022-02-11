import createGalleryItem from './pokemonItem';

export default function getPokemonList(pokemons){
    return pokemons.map(createGalleryItem).join('');
}