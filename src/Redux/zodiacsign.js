import axios from 'axios';

const GET_PREDICTION = 'ARIES'
const url = 'https://aztro.sameerkumar.website/?sign=aries&day=today';


// ACTION

export const getZodiacSign = (payload) => ({
    type: GET_PREDICTION,
    payload,
})

export const fetchZodiacSign = (s) => async (dispatch) => {

    const options = {
        method: 'GET',
        url: 'https://horoscope-astrology.p.rapidapi.com/sign',
        params: { s: s },
        headers: {
            'X-RapidAPI-Key': '0555da986fmsh33c56b1ea054e87p195283jsne4bfafd182e0',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const keys = Object.keys(response.data)
        const zodiacInfo = {}

        keys.forEach((e) => {
            zodiacInfo[e] = response.data[e]
        })
        
        dispatch(getZodiacSign(zodiacInfo));

    } catch (error) {
        console.error(error);
    }


}

export default function zodiacsignReducer(state = [], action) {
    switch (action.type) {
        case GET_PREDICTION:
            return action.payload;
        default:
            return state;
    }
}