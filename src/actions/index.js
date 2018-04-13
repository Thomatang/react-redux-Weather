import axios from 'axios'; // library for making AJAX requests

const API_KEY = 'd68e1108c03754a41cea81d2412f66f9';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//DEFINE SINGLE VARIABLE for our action type in fetchWeather function
export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator:
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // this returns a promise = data structure that does not yet contain any data

    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}