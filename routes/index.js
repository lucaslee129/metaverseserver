const status = require('../src/health/routes');
const users = require('../src/users/routes');
const verify = require('../src/messageverification/routes');
// const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports = (app) => {
  app.use('/status', status);
  app.use('/users', users);
  // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
  app.use('/verify', verify);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
