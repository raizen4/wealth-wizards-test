
const R = require('ramda')

const calculateDifference = currentYearContribution => selectedYearContribution => Math.abs(currentYearContribution - selectedYearContribution)

export const getDifferenceInContribution = selectedYearToCompare => {
    const currentYear = '2019-10-27'
    return R.pipe(
        fetch("getMePreviousContribution"),
        fetch("getMeCurrentContribution"),
        calculateDifference(current)(previous)
    )
}