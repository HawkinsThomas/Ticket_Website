CREATE TABLE IF NOT EXISTS user(
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
     PRIMARY KEY (username)
)ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS ticket(
  ticketID int(32) NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
  ticketDetails varchar(255) NOT NULL,
  dateCreated DATETIME NOT NULL,
  PRIMARY KEY(`ticketID`),
  FOREIGN KEY(`username`) REFERENCES user(`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;