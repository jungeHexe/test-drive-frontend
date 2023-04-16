import axios from 'axios';

export default {

    getRandomQuote(){
        return axios.get(`http://localhost:8042/api/quote/`)
            .then(res => {
                return res.data;
            }).catch(err => {
                throw err;
            })
    },
}
