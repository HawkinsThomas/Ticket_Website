
CREATE TABLE IF NOT EXISTS `book`(
  `Book_ID` int(32) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Publisher_Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Book_ID`),
  FOREIGN KEY(`Publisher_Name`) REFERENCES publisher(`Name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `author`(
  `Book_ID` int(32) NOT NULL,
  `Author_Name` varchar(255),
  PRIMARY KEY(`Book_ID`, `Author_Name`),
  FOREIGN KEY(`Book_ID`) REFERENCES book(`Book_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `publisher`(
  `Name` varchar(12) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL, 
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
    
CREATE TABLE IF NOT EXISTS `book_copy`(
  `Book_ID` int(32) NOT NULL,
  `Branch_ID` int(32) NOT NULL,
  `No_of_Copies` int(64) NOT NULL, 
  PRIMARY KEY (`Book_ID`, `Branch_ID`),
  FOREIGN KEY(`Book_ID`) REFERENCES book(`Book_ID`),
  FOREIGN KEY(`Branch_ID`) REFERENCES branch(`Branch_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `book_loan`(
  `Book_ID` int(32) NOT NULL,
  `Branch_ID` int(32) NOT NULL,
  `Card_No` int(32) NOT NULL,
  `Date_Out` DATE NOT NULL,
  `Due_Date` DATE NOT NULL,
  PRIMARY KEY (`Book_ID`, `Branch_ID`, `Card_no`),
  FOREIGN KEY(`Book_ID`) REFERENCES book(`Book_ID`),
  FOREIGN KEY(`Branch_ID`) REFERENCES branch(`Branch_ID`),
  FOREIGN KEY(`Card_No`) REFERENCES borrower(`Card_No`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `branch`(
  `Branch_ID` int(32) NOT NULL AUTO_INCREMENT,
  `Branch_Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  PRIMARY KEY (`Branch_ID`),
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `borrower`(
  `Card_No` int(32) NOT NULL, AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  PRIMARY KEY (`Card_No`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


INSERT INTO book values (NULL, 'Harry Potter', 'J. K. Rowling');
INSERT INTO book values (NULL, 'Game of Thrones', 'George R. R. Martin');
INSERT INTO book values (NULL, '50 Shades of Gray', 'E. L. James');

INSERT INTO author values (1, 'J. K. Rowling');
INSERT INTO author values (2, 'George R. R. Martin');
INSERT INTO author values (3 'E. L. James');

INSERT INTO publisher values ('J. K. Rowling', '120 Broadway Ave, Toronton ON, Canada', '416 123 4567');
INSERT INTO publisher values ('George R. R. Martin', '110 Madison Ave, Toronto ON, Canada', '905 515 5848');
INSERT INTO publisher values ('E. L. James', '808 Wartman Ave, Kingston ON, Canada', '902 109 0210');

INSERT INTO book_copy values (1, 1, 15);
INSERT INTO book_copy values (2, 1, 10);
INSERT INTO book_copy values (3, 2, 18);

INSERT INTO book_loan values (1, 1, 1, '20190813', '20190827');
INSERT INTO book_loan values (2, 1, 2, '20190730', '20190813');
INSERT INTO book_loan values (3, 2, 3, '20190802', '20190816');

INSERT INTO branch values (NULL, 'Uptown Toronto Library');
INSERT INTO branch values (NULL, 'Downtown Toronto Library');
INSERT INTO branch values (NULL, 'York Library');

INSERT INTO borrower values (NULL, 'Thomas Hawkins', '120 Fake St, Toronto ON, Canada', '613 329 8356');
INSERT INTO borrower values (NULL, 'Bobby Hill', '121 Fake St, Toronto ON, Canada', '905 123 1234');
INSERT INTO borrower values (NULL, 'Bojack Horseman', '122 Fake St, Toronto ON, Canada', '416 321 4567');