import { actionTypes } from '../constants'
const R = require('ramda')

let initialState = {
    history: []
}

const niContributionDiff = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CONTRIBUTION_DIFF:
            return {
                ...state,
                history: R.append(action.payload, history)
            }

    }
}