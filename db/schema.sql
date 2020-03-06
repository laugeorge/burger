-- Create the database
-- CREATE DATABASE sexgs4todoveo3p9;
USE `sexgs4todoveo3p9`;

-- Create the table burgers
CREATE TABLE `burgers`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);