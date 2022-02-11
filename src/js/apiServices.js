import BASE_URL from './api';

const apiServices = {
    async mainRequest(start, end) {
       const response = await fetch(`${BASE_URL}/pokemon/?limit=${end-start+1}&offset=${start-1}`);
       return response;
   },
    getPokemonInfo(name){
        return fetch(`${BASE_URL}/pokemon/${name}`)
        .then(response=>response.json());
    }
};
export default apiServices;