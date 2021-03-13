import axios from 'axios'
import { COVID_CASES_FAIL, COVID_CASES_REQUEST, COVID_CASES_SUCCESS } from "../constants/casesConstants"

export const listCases = () => async (dispatch) => {
    try {

        dispatch({
            type: COVID_CASES_REQUEST
        })
        
        const { data } = await axios.get(`https://covidnigeria.herokuapp.com/api`)

        dispatch({
            type: COVID_CASES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COVID_CASES_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message,
        })
    }
}