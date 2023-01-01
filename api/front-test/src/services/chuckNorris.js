import axios from 'axios';

export const getRandomJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data
}