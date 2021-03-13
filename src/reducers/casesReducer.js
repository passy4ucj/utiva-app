import { COVID_CASES_FAIL, COVID_CASES_REQUEST, COVID_CASES_RESET, COVID_CASES_SUCCESS } from "../constants/casesConstants"

export const covidCasesReducer = (state = { cases: [] }, action) => {
    switch (action.type) {
        case COVID_CASES_REQUEST:
            return { loading: true }
        case COVID_CASES_SUCCESS:
            return { loading: false, cases: action.payload.data.states }
        case COVID_CASES_FAIL:
            return { loading: false, error: action.payload }
        case COVID_CASES_RESET:
            return { cases: [] }
        default:
            return state
    }
}