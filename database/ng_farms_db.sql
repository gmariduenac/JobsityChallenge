/* SQL Manager Lite for MySQL                              5.7.2.52112 */
/* ------------------------------------------------------------------- */
/* Host     : localhost                                                */
/* Port     : 3306                                                     */
/* Database : ng_farms_db                                              */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8mb4' */;

SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `ng_farms_db`;

CREATE DATABASE `ng_farms_db`
    CHARACTER SET 'utf8mb4'
    COLLATE 'utf8mb4_0900_ai_ci';

USE `ng_farms_db`;

/* Structure for the `farm` table : */

CREATE TABLE `farm` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(180) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` VARCHAR(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image` VARCHAR(200) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=9 ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci'
;

/* Structure for the `pond` table : */

CREATE TABLE `pond` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(180) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `size` DOUBLE DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id_farm_fk` INTEGER NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  KEY `pond_fk1` USING BTREE (`id_farm_fk`),
  CONSTRAINT `pond_fk1` FOREIGN KEY (`id_farm_fk`) REFERENCES `farm` (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=4 ROW_FORMAT=DYNAMIC CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci'
;

/* Data for the `farm` table  (LIMIT 0,500) */

INSERT INTO `farm` (`id`, `name`, `description`, `image`, `created_at`) VALUES
  (4,'Farm 4','Farm 4 description updated 3','https://previews.123rf.com/images/jirapatche/jirapatche1807/jirapatche180700219/105359667-aerial-view-of-shrimp-farm-and-air-purifier-in-thailand-continuous-growing-aquaculture-business-is-e.jpg','2020-12-13 20:04:28'),
  (6,'Farm 6','Farm 6 description modified','https://previews.123rf.com/images/jirapatche/jirapatche1807/jirapatche180700219/105359667-aerial-view-of-shrimp-farm-and-air-purifier-in-thailand-continuous-growing-aquaculture-business-is-e.jpg','2020-12-13 20:18:44'),
  (8,'Farm 7','This is Quevedo Farm update 1','https://images.thefishsite.com/fish/articles/asia/the-worlds-largest-integrated-shrimp-farm-indonesia-credit-lim-shrimp-organisation.jpg?profile=article-inline@tablet','2020-12-17 23:51:02'),
  (23,'Farm 15','Cotopaxi','http://anyurl.com','2020-12-21 04:46:52');
COMMIT;

/* Data for the `pond` table  (LIMIT 0,500) */

INSERT INTO `pond` (`id`, `name`, `size`, `created_at`, `id_farm_fk`) VALUES
  (1,'Pond 1 - Farm 7',7.33,'2020-12-21 02:22:23',8),
  (4,'Pond 6 - Farm 6',50,'2020-12-21 03:16:11',6),
  (5,'Pond 1 - Farm 15',16,'2020-12-21 04:48:25',23),
  (6,'Pond 2 - Farm 15',16,'2020-12-21 04:56:18',23),
  (7,'Pond 1 - Farm 4',11,'2020-12-21 10:36:13',4),
  (10,'Pond 2 - Farm 4',10.32,'2020-12-21 18:22:53',4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;