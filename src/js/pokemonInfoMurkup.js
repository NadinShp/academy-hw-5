export default function pokemonInfoMurkup(pokemon){
    const {front_default, name, height, weight} = pokemon;
    return `<div class="info-wrap">
            <img src="${front_default}" alt="${name}" class="pokemon-img" />
            <ul class="info-list"><li class="info-item">name: ${name}</li>
            <li class="info-item">height: ${height}</li>
            <li class="info-item">weight: ${weight}</li>
            </ul></div>`
};