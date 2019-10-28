import { useSelector, useDispatch } from 'react-redux'
import { actionTypes } from '../constants'
import axios from 'axios'
const R = require('ramda')

const calculateDifference = (currentYearContribution, selectedYearContribution) => {
    return (dispatch, getState) => {
        const difference = Math.abs(currentYearContribution - selectedYearContribution)
        dispatch(updateNiDiff(difference))
    }
}

export const updateGrossIncomeAction = newGrossIncome => {
    return {
        type: actionTypes.UPDATE_GROSS_INCOME,
        payload: newGrossIncome
    }
}
const updateNiPaidIn2019 = niPaid => {
    return {
        type: actionTypes.UPDATE_NI_PAID_IN2019,
        payload: niPaid
    }
}
const updateNiPaidIn2018 = niPaid => {
    return {
        type: actionTypes.UPDATE_NI_PAID_IN2018,
        payload: niPaid
    }
}

const updateNiDiff = diff => {
    return {
        type: actionTypes.UPDATE_NI_PAID_IN2018,
        payload: diff
    }
}
const asyncGetContributionForYear = async (currentDate, grossIncome) => {
    try {
        console.log(currentDate, grossIncome)
        const rawResponse = await axios.post('http://localhost:4040/v1/national-insurance/',
            { date: currentDate, income: grossIncome });
        const content = rawResponse.data
        return content
    } catch (err) {
        console.log(err)
    }

}

export const asyncGetDifferenceInContribution = (income) => {
    return async (dispatch, getState) => {
        const currentYearNi = await asyncGetContributionForYear('2019-10-27', income)
        dispatch(updateNiPaidIn2019(currentYearNi.ni))
        const previousYearNi = await asyncGetContributionForYear('2018-10-27', income)
        dispatch(updateNiPaidIn2018(previousYearNi.ni))
        calculateDifference(currentYearNi, previousYearNi)

    }
}