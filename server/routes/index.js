const alarmsController = require('../controllers').alarms;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Alarms API! Documentation is located on github',
  }));

  app.post('/api/alarms', alarmsController.create);
  app.get('/api/alarms', alarmsController.list);
};
