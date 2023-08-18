import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';

const GET_PREDICTION = 'ARIES'
const url = 'https://aztro.sameerkumar.website/?sign=aries&day=today';


// ACTION

export const getPrediction = (payload) => ({
    type: GET_PREDICTION,
    payload,
})

export const fetchPrediction = () => async(dispatch) => {
    const response = await axios.get(url);
    const data  = await response.data;

    console.log(data);
}

export default function predictionReducer(state = [], action) {
    switch(action.type) {
        case GET_PREDICTION:
            return action.payload;
        default:
            return state;
    }
}