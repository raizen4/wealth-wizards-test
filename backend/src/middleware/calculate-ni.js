const nationalInsurance = require('../services/national-insurance');

module.exports = (req, res) => {
  console.log(req.date + req.income + 'HI');
  res.send({
    income: req.income,
    ni: nationalInsurance(req.date)(req.income),
  });
};
