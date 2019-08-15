const { getTable } = require('../db/getTable');

module.exports = {
  login: (req, res) => {
    const query = `SELECT password FROM user WHERE username='${req.body.username}';`;
    getTable(query)
      .catch(error => res.json(error))
      .then((data) => {
        if (data.length === 0) {
          res.sendStatus(403);
        } else if (data.tableData[0][0] === req.body.password) {
          req.session.username = req.body.username;
          res.redirect('/');
        } else {
          res.sendStatus(403);
        }
      });
  },
};
