const argon2 = require('argon2');
const { writeTable } = require('../db/writeTable');
const { userExists } = require('../db/userExists');

module.exports = {
  register: (req, res) => {
    userExists(req.body.username)
      .then((exists) => {
        if (!exists) {
          argon2.hash(req.body.password)
            .then((pwHash) => {
              const query = `INSERT INTO user VALUES ('${req.body.username}', '${pwHash}');`;
              writeTable(query)
                .catch(error => res.json(error))
                .then((data) => {
                  res.sendStatus(200);
                });
            });
        } else {
          res.json({ error: 'username already exists' });
        }
      });
  },
};
