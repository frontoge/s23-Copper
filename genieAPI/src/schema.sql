-- --------------------------------------------------------
-- Host:                         edenrp.net
-- Server version:               8.0.32-0ubuntu0.22.04.2 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for grocery_genie
CREATE DATABASE IF NOT EXISTS `grocery_genie` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `grocery_genie`;

-- Dumping structure for table grocery_genie.favorite_recipies
CREATE TABLE IF NOT EXISTS `favorite_recipies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `recipeid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.favorite_stores
CREATE TABLE IF NOT EXISTS `favorite_stores` (
  `id` int NOT NULL,
  `owner` int NOT NULL,
  `store` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.grocerylist
CREATE TABLE IF NOT EXISTS `grocerylist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int DEFAULT NULL,
  `item` varchar(30) NOT NULL,
  `quantity` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.mealplan
CREATE TABLE IF NOT EXISTS `mealplan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `recpieID` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `type` enum('Breakfast','Lunch','Dinner') NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.profiles
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `owner` int unsigned NOT NULL COMMENT 'The ID of the owner account',
  `name` varchar(30) NOT NULL DEFAULT '',
  `diet` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `restrictions` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `active` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.uploadedRecipes
CREATE TABLE IF NOT EXISTS `uploadedRecipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uploader` int NOT NULL COMMENT 'User ID of the user who uploaded',
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `ingredients` json DEFAULT NULL,
  `img` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table grocery_genie.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
