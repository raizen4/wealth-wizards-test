const R = require('ramda');
const RD = require('../utils/ramda-decimal');

module.exports = (req, res, next) => {
  let date;
  let income;
  if (!R.has('income', req.body)) {
    return next(new Error('No income provided in request body'));
  }
  if (!R.has('date', req.body)) {
    date = '2019-04-06';
  }
  try {
    income = RD.decimal(req.body.income);
    date = req.body.date;
    if (income.isNaN()) {
      return next(new Error('Income provided is NaN'));
    }

    req.income = income;
    req.date = date;
    return next();
  } catch (e) {
    return next(new Error('Income provided is an invalid number'));
  }
};
