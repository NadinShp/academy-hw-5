import refs from './js/refs';
import apiServices from './js/apiServices';
import getPokemonList from './js/pokemonList';
import pokemonInfoMurkup from './js/pokemonInfoMurkup';
import testInput from './js/testInput';
import getRightPadding from './js/getRightPadding';

let heightP = getRightPadding();
console.log('heightP', heightP);
refs.form.addEventListener('submit', onFormSubmit);
const pokemons = [];

async function onFormSubmit(e) {
    e.preventDefault();
    const {value} = e.currentTarget.elements.query;
    const validValue = testInput(value);
    if(!validValue){
        return;
    }
    const [start, end] = value.split('-');
    pokemons.length = pokemons.length > 0 ?  0 : pokemons.length;
    refs.input.value = '';
    refs.galleryList.innerHTML = `<img src="https://i.gifer.com/5IPv.gif" alt="Loading..." class="load"/>`
    refs.infoContainer.innerHTML = '';
    try{
        const result = await apiServices.mainRequest(start, end);
        if(!result.ok){
            throw result;
        }
        const {results} = await result.json();
        results.map(el=>el.name).forEach(el =>apiServices.getPokemonInfo(el)
        .then(({sprites: {front_default}, name, id, height, weight})=>{
            pokemons.push(({front_default, name, id, height, weight}));
        const template = getPokemonList(pokemons);
        if(pokemons.length === (end-start+1)){
            refs.galleryList.innerHTML = template;
            heightP = heightP + refs.galleryList.clientHeight;
            console.log('heightP', heightP);
        }
        refs.galleryList.addEventListener('click', onClickItemGallery);
        }));
    } catch(error){
        console.log(error);
    }
}

function onClickItemGallery(e){
    if(e.target.nodeName !== "UL"){
        let id = e.target.dataset.id ?? e.target.parentElement.dataset.id;
        let pokemon = pokemons.find(el=>+el.id===+id);
        const temp = pokemonInfoMurkup(pokemon);
        refs.infoContainer.innerHTML = temp;
        heightP = heightP + refs.infoContainer.clientHeight;
        window.scrollTo(0, heightP);
    }
}