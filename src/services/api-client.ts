import axios from "axios";
// creating a access instant with custom config
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7e6ab9a914ff4c4084974b0b17deed1c'
    }
})