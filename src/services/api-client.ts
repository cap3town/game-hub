import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd70ff94a0c9f4f72907a7f249de5aec4',
    },
});
