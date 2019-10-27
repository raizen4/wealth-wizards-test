
const R = require('ramda')
import * as reducer from '../reducers/niContributionReducer'
import { actionTypes } from '../constants'
const calculateDifference = currentYearContribution => selectedYearContribution => Math.abs(currentYearContribution - selectedYearContribution)

const updateDifferenceAction = diff => {
    return {
        type: actionTypes.UPDATE_CONTRIBUTION_DIFF,
        payload: diff
    }
}
const asyncGetContributionAction = (year, grossIncome) => {
    return R.curry(async () => {
        const rawResponse = await fetch('localhost:4040/v1/national-insurance/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: year, grossIncome })
        });
        const content = await rawResponse.json();

        console.log(content);

    }
    )
}

export const asyncGetDifferenceInContribution = currentIncome => {
    const currentYear = '2019-10-27'
    const compareYear = '2018-10-27'
    return (dispatch, getState) => {
        R.compose(
            dispatch((result) => dispatch(updateDifferenceAction(result))),
            calculateDifference(R.__, R.__),
            (previousYearNi) => asyncGetContributionAction(compareYear, currentIncome),
            (currentYearNi) => asyncGetContributionAction(currentYear, currentIncome)
        )
    }
}