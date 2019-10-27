
const R = require('ramda');
const moment = require('moment');
const RD = require('../utils/ramda-decimal');

const allBands = require('../config/ni');

const isDateOnOrAfter = R.curry(
  (date, dateString) => moment.utc(dateString, 'YYYY-MM-DD')
    .isSameOrBefore(date),
);

const noBandsError = date => new Error(`National Insurance bands unavailable for date ${date}`);

const bandsOnDate = (date) => {
  let month = moment.utc(date, 'YYYY-MM-DD');
  return R.compose(
    R.when(R.isNil, () => {
      throw noBandsError(date);
    }),
    R.prop('bands'),
    R.last,
    R.filter(R.propSatisfies(isDateOnOrAfter(month), 'startDate')),
  )(allBands);
};


// TODO this should do more than return the number it's given
// eslint-disable-next-line consistent-return
const slice = R.curry((floor, ceiling, income) => {
  if (income <= floor) {
    return 0;
  }
  if (income > floor && income <= ceiling) {
    return income - floor;
  }
  if (income > floor && income > ceiling) {
    return ceiling - floor;
  }
});

const calcForBand = R.curry(
  (income, { floor, ceiling, rate }) => RD.multiply(
    slice(floor, ceiling, income),
    rate,
  ),
);

module.exports = (runDate) => {
  const bands = bandsOnDate(runDate || moment.utc());
  return R.compose(
    RD.sum,
    R.flip(R.map)(bands),
    calcForBand
  );
};

// for unit tests
module.exports.bandsOnDate = bandsOnDate;
module.exports.slice = slice;
