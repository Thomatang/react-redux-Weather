import {FETCH_WEATHER} from '../actions/index';
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([ action.payload.data ]);// return new instance of state with added weather data
            //ES6 version : return [action.payload.data,...state];
    }
    return state;
}