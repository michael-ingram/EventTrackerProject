-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema banddb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `banddb` ;

-- -----------------------------------------------------
-- Schema banddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `banddb` DEFAULT CHARACTER SET utf8 ;
USE `banddb` ;

-- -----------------------------------------------------
-- Table `concert`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `concert` ;

CREATE TABLE IF NOT EXISTS `concert` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `venue` VARCHAR(100) NULL,
  `street` VARCHAR(500) NULL,
  `city` VARCHAR(100) NULL,
  `state` VARCHAR(2) NULL,
  `zipcode` VARCHAR(6) NULL,
  `concert_date` DATE NULL,
  `concert_time` TIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS banduser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'banduser'@'localhost' IDENTIFIED BY 'banduser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'banduser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `concert`
-- -----------------------------------------------------
START TRANSACTION;
USE `banddb`;
INSERT INTO `concert` (`id`, `venue`, `street`, `city`, `state`, `zipcode`, `concert_date`, `concert_time`) VALUES (1, 'Madison Square Garden', '4 Pennsylvania Plaza', 'New York', 'NY', '10001', '2021-08-20', '19:00:00');
INSERT INTO `concert` (`id`, `venue`, `street`, `city`, `state`, `zipcode`, `concert_date`, `concert_time`) VALUES (2, 'Red Rocks Ampitheater', '18300 W Alameda Parkway', 'Morrison', 'CO', '80465', '2021-08-28', '21:00:00');
INSERT INTO `concert` (`id`, `venue`, `street`, `city`, `state`, `zipcode`, `concert_date`, `concert_time`) VALUES (3, 'Hollywood Bowl Ampitheater', '2301 N Highland Ave', 'Los Angeles', 'CA', '90068', '2021-09-05', '20:00:00');

COMMIT;

