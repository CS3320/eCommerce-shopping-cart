CREATE SCHEMA IF NOT EXISTS cs3320;
USE cs3320;

CREATE TABLE IF NOT EXISTS cs3320.Orders (
  userID INT(10) UNSIGNED NOT NULL,
  orderNumber INT(10) UNSIGNED NOT NULL,
  productID INT(10) UNSIGNED NOT NULL,
  quantity VARCHAR(45) NOT NULL,
  totalPrice DOUBLE NOT NULL,
  PRIMARY KEY (userID, orderNumber, productID, quantity, totalPrice))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS cs3320.PaymentInformation (
  userID INT(10) UNSIGNED NOT NULL,
  cardType VARCHAR(45) NOT NULL,
  cardNumber INT(10) UNSIGNED NOT NULL,
  expDate INT(11) NOT NULL,
  PRIMARY KEY (`userID`, `cardType`, `cardNumber`, `expDate`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `cs3320`.`Products` (
  `productID` INT(10) UNSIGNED NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `unitPrice` DOUBLE NOT NULL,
  PRIMARY KEY (`productID`, `description`, `unitPrice`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `cs3320`.`ShippingInformation` (
  `userID` INT(10) UNSIGNED NOT NULL,
  `address1` VARCHAR(100) NOT NULL,
  `address2` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `zip` INT(11) NOT NULL,
  PRIMARY KEY (`userID`, `address1`, `address2`, `city`, `state`, `zip`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `cs3320`.`UserCredentials` (
  `userID` INT(10) UNSIGNED NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`userID`, `username`, `password`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `cs3320`.`UserInformation` (
  `userID` INT(10) UNSIGNED NOT NULL,
  `fullName` VARCHAR(50) NOT NULL,
  `address1` VARCHAR(100) NOT NULL,
  `address2` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `zip` INT(11) NOT NULL,
  PRIMARY KEY (`userID`, `fullName`, `address1`, `address2`, `city`, `state`, `zip`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `cs3320`.`states` (
  `state_id` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'PK: State ID',
  `state_name` VARCHAR(32) NOT NULL COMMENT 'State name with first letter capital',
  `state_abbr` VARCHAR(8) NULL DEFAULT NULL COMMENT 'Optional state abbreviation (US 2 cap letters)',
  PRIMARY KEY (`state_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 52
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;
