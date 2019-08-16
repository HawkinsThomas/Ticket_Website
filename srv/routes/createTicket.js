const { writeTable } = require('../db/writeTable');

module.exports = {
  createTicket: (req, res) => {
    if (!req.session.username) {
      res.redirect('/login.html');
    } else {
      const query = `INSERT INTO ticket VALUES (NULL, '${req.session.username}', '${req.body.ticketDetails}', NOW());`;
      console.log(query);
      writeTable(query)
        .catch(error => res.json(error))
        .then((data) => {
          console.log(data);
          res.redirect('/');
        });
      }
  },
};