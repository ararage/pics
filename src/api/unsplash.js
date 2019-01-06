import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID fa773d4de8c4e67ebaa67b1f571326d154d9e5bf2d8315ac8fbcbf8c0c865bf8'
    }
});

