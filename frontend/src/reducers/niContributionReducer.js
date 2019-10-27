import { actionTypes } from '../constants'
const R = require('ramda')

let initialState = {
    niContributionDiff: 0
}

const niContributionDiff = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CONTRIBUTION_DIFF:
            return {
                ...state,
                niContributionDiff: action.payload
            }
    }
}