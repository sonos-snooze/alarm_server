const Alarm = require('../models').Alarm;

module.exports = {
  create(req, res) {
    console.log(req);
    console.log(req.body);
    console.log(req.body.name);
    return Alarm.create({
      name: req.body.name,
      user_id: req.body.user_id,
      alarm_time: req.body.alarm_time,
      alarm_on: req.body.alarm_on
    })
    .then(alarm => res.status(201).send(alarm))
    .catch(error => res.status(400).send(error));
  },
};
