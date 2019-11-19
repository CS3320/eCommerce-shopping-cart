CREATE SCHEMA IF NOT EXISTS cs3320;
USE cs3320;

CREATE TABLE IF NOT EXISTS products (
  product_id int(11) NOT NULL,
  name varchar(100) NOT NULL,
  sku varchar(14) NOT NULL,
  price decimal(15,2) NOT NULL,
  image varchar(50) NOT NULL,
  PRIMARY KEY (product_id),
  UNIQUE KEY sku (sku)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS cs3320.Orders (
  userID INT(10) UNSIGNED,
  orderNumber INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  productID INT(10) UNSIGNED NOT NULL,
  quantity VARCHAR(45) NOT NULL,
  totalPrice DOUBLE NOT NULL,
  PRIMARY KEY (orderNumber));

CREATE TABLE IF NOT EXISTS cs3320.PaymentInformation (
  userID INT(10) UNSIGNED NOT NULL,
  cardType VARCHAR(45) NOT NULL,
  cardNumber BIGINT(16) NOT NULL,
  expDate VARCHAR(45) NOT NULL,
  PRIMARY KEY (userID, cardType, cardNumber, expDate));

CREATE TABLE IF NOT EXISTS cs3320.ShippingInformation (
  userID INT(10) UNSIGNED NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  zip INT(11) NOT NULL,
  PRIMARY KEY (userID, address1, address2, city, state, zip));

CREATE TABLE IF NOT EXISTS cs3320.UserInformation(
    userID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(100) NOT NULL,
    address1 VARCHAR(100) NOT NULL,
    address2 VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(45) NOT NULL,
    zip INT(9) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY(userID, email),
    UNIQUE KEY(email));

CREATE TABLE IF NOT EXISTS cs3320.UserCredentials (
  userID INT(10) UNSIGNED NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY (userID, username, password));

CREATE TABLE IF NOT EXISTS cs3320.states (
  state_id SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'PK: State ID',
  state_abbr VARCHAR(8) NULL DEFAULT NULL COMMENT 'Optional state abbreviation (US 2 cap letters)',
  state_name VARCHAR(32) NOT NULL COMMENT 'State name with first letter capital',
  PRIMARY KEY (state_id),
  UNIQUE KEY state_abbr (state_abbr)
  );


INSERT into states (state_abbr, state_name) values ('AL', 'Alabama'),
('AK', 'Alaska'),
('AZ', 'Arizona'),
('AR', 'Arkansas'),
('CA', 'California'),
('CO', 'Colorado'),
('CT', 'Connecticut'),
('DE', 'Delaware'),
('DC', 'District of Columbia'),
('FL', 'Florida'),
('GA', 'Georgia'),
('HI', 'Hawaii'),
('ID', 'Idaho'),
('IL', 'Illinois'),
('IN', 'Indiana'),
('IA', 'Iowa'),
('KS', 'Kansas'),
('KY', 'Kentucky'),
('LA', 'Louisiana'),
('ME', 'Maine'),
('MD', 'Maryland'),
('MA', 'Massachusetts'),
('MI', 'Michigan'),
('MN', 'Minnesota'),
('MS', 'Mississippi'),
('MO', 'Missouri'),
('MT', 'Montana'),
('NE', 'Nebraska'),
('NV', 'Nevada'),
('NH', 'New Hampshire'),
('NJ', 'New Jersey'),
('NM', 'New Mexico'),
('NY', 'New York'),
('NC', 'North Carolina'),
('ND', 'North Dakota'),
('OH', 'Ohio'),
('OK', 'Oklahoma'),
('OR', 'Oregon'),
('PA', 'Pennsylvania'),
('PR', 'Puerto Rico'),
('RI', 'Rhode Island'),
('SC', 'South Carolina'),
('SD', 'South Dakota'),
('TN', 'Tennessee'),
('TX', 'Texas'),
('UT', 'Utah'),
('VT', 'Vermont'),
('VA', 'Virginia'),
('WA', 'Washington'),
('WV', 'West Virginia'),
('WI', 'Wisconsin'),
('WY', 'Wyoming');

INSERT INTO products (product_id, name, sku, price, image) VALUES
(1, 'Iphone', 'IPHO001', '400.00', 'images/iphone.jpg'),
(2, 'Camera', 'CAME001', '700.00', 'images/camera.jpg'),
(3, 'Watch', 'WATC001', '100.00', 'images/watch.jpg');


