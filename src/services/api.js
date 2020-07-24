import axios from "axios";
//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7afb3281a8b9b3cd6346
const api = axios.create({
    baseURL: "https://free.currencyconverterapi.com/api/v5/"
});


export default api;