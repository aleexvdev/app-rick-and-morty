import axios from "axios";

async function getTotalCharacters() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        return response.data.info.count;
        console.log(response.data.info.count);
    } catch (error) {
        console.error('Error obteniendo los personajes:', error);
        return null;
    }
}