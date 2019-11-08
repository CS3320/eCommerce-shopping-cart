CREATE SCHEMA IF NOT EXISTS cs3320;
USE cs3320;

CREATE TABLE IF NOT EXISTS cs3320.Orders (
  userID INT(10) UNSIGNED NOT NULL,
  orderNumber INT(10) UNSIGNED NOT NULL,
  productID INT(10) UNSIGNED NOT NULL,
  quantity VARCHAR(45) NOT NULL,
  totalPrice DOUBLE NOT NULL,
  PRIMARY KEY (userID, orderNumber, productID, quantity, totalPrice));

CREATE TABLE IF NOT EXISTS cs3320.PaymentInformation (
  userID INT(10) UNSIGNED NOT NULL,
  cardType VARCHAR(45) NOT NULL,
  cardNumber INT(10) UNSIGNED NOT NULL,
  expDate INT(11) NOT NULL,
  PRIMARY KEY (userID, cardType, cardNumber, expDate));


CREATE TABLE IF NOT EXISTS cs3320.Products (
  productID INT(10) UNSIGNED NOT NULL,
  description VARCHAR(500) NOT NULL,
  unitPrice DOUBLE NOT NULL,
  PRIMARY KEY (productID);



CREATE TABLE IF NOT EXISTS cs3320.ShippingInformation (
  userID INT(10) UNSIGNED NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  zip INT(11) NOT NULL,
  PRIMARY KEY (userID, address1, address2, city, state, zip));


CREATE TABLE IF NOT EXISTS cs3320.UserCredentials (
  userID INT(10) UNSIGNED NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY (userID, username, password));


CREATE TABLE IF NOT EXISTS cs3320.UserInformation (
  userID INT(10) UNSIGNED NOT NULL,
  fullName VARCHAR(100) NOT NULL,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(45) NOT NULL,
  zip INT(9) NOT NULL,
  PRIMARY KEY (userID, fullName, address1, address2, city, state, zip));


CREATE TABLE IF NOT EXISTS cs3320.states (
  state_id SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'PK: State ID',
  state_abbr VARCHAR(8) NULL DEFAULT NULL COMMENT 'Optional state abbreviation (US 2 cap letters)',
  state_name VARCHAR(32) NOT NULL COMMENT 'State name with first letter capital',
  PRIMARY KEY (state_id));


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

