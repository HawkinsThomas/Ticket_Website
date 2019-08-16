const { getTable } = require('../db/getTable');

module.exports = {
  myTickets: (req, res) => {
    if (!req.session.username) {
      res.redirect('/login.html');
    } else {
      const query = `SELECT * FROM ticket WHERE username='${req.session.username}' ORDER BY dateCreated DESC;`;
      getTable(query)
        .catch(err => console.log(err))
        .then(data => res.json(data));
    }
  },
};
