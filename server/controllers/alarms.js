const Alarm = require('../models').Alarm;

module.exports = {
  create(req, res) {
    return Alarm.create({
      name: req.body.name,
      user_id: req.body.user_id,
      alarm_time: req.body.alarm_time,
      alarm_on: req.body.alarm_on
    })
    .then(alarm => res.status(201).send(alarm))
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Alarm
      .all()
      .then(alarms => res.status(200).send(alarms))
      .catch(error => res.status(400).send(error));
  }
};
