import { actionTypes } from '../constants'
const R = require('ramda')

const initialState = {
    grossIncome: 20000,
    niPaidIn2019: -1,
    niPaidIn2018: -1,
    difference: -1
}
export const mainReducer = (state = initialState, action) => {
    if (!action) {
        return state
    }
    switch (action.type) {

        case actionTypes.CURRENT_CALCULATION:
            return R.evolve({
                difference: R.always(action.payload)
            },
                state)

        case actionTypes.UPDATE_GROSS_INCOME:
            return R.evolve({
                grossIncome: R.always(action.payload)
            },
                state)

        case actionTypes.UPDATE_NI_PAID_IN2019:
            return R.evolve({
                niPaidIn2019: R.always(action.payload)
            },
                state)

        case actionTypes.UPDATE_NI_PAID_IN2018:
            return R.evolve({
                niPaidIn2018: R.always(action.payload)
            },
                state)

        case actionTypes.UPDATE_DIFFERENCE:
            return R.evolve({
                difference: R.always(action.payload)
            },
                state)

        default:
            return state
    }
}
export default mainReducer

