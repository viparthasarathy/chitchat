const User = require('./models/user');


module.exports = function(app) {

  app.post('/signup', (req, res) => {
    if (!req.body.name || !req.body.password) {
      res.json({ success: false, msg: 'Please enter a name and password.' });
    } else {
      let newUser = new User({
        name: req.body.name,
        password: req.body.password
      });
      newUser.save((err) => {
        if (err) {
          return res.json({ success: false, msg: 'Username is taken.' });
        }
        res.json({ success: true, msg: 'Successfully created new user.' });
      });
    }
  });

  app.post('/authenticate', (req, res) => {
    User.findOne({
      name: req.body.name
    }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.send({ success: false, msg: 'User not found.' })
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.encode(user, db.secret);
            res.json({ success: true, token: 'JWT ' + token });
          } else {
            res.send({ success: false, msg: 'Password is incorrect.' });
          }
        });
      }
    });
  });

  app.get('*', (req, res) => {
    res.sendfile('./public/views/index.html');
  });



};
