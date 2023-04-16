import axios from 'axios';

export default {

    getRandomQuote(){
        return axios.get(`http://localhost:9090/api/quote/get/`)
            .then(res => {
                return res.data;
            }).catch(err => {
                throw err;
            })
    },
}
