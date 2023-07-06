import axios from "axios";
export default axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'https://api-laptoplnhv.onrender.com/api',
    header: {
        'Content-Type':'application/json' 
    }
});