CREATE TABLE data (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE auth (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  password VARCHAR(40) NOT NULL,
  account_type VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO auth (username, password, account_type) VALUES
('johndoe', MD5('mypassword'), 'admin'),
('janedoe', MD5('mypassword'), 'user');

show tables;
select * from auth;