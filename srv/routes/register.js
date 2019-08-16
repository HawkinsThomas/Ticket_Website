const { writeTable } = require('../db/writeTable');

module.exports = {
  login: (req, res) => {
    const query = `INSERT INTO user VALUES ('${req.body.username}', '${req.body.password}');`;
    writeTable(query)
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
