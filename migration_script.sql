-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 23, 2014 at 05:39 PM
-- Server version: 5.0.95
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dizzion_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_master`
--

CREATE TABLE IF NOT EXISTS `category_master` (
  `id` bigint(4) NOT NULL auto_increment,
  `category_name` varchar(100) default NULL,
  `status` enum('A','D') default NULL,
  `created_by` bigint(4) default NULL,
  `created_dt` datetime default NULL,
  `modified_by` bigint(4) default NULL,
  `modified_dt` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `category_master`
--

INSERT INTO `category_master` (`id`, `category_name`, `status`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 'default', 'A', 1, '2013-02-01 00:00:00', 1, '2013-02-02 00:00:00');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



-- Query to create categroy_id in app_info_master

ALTER TABLE `app_info_master` ADD `category_id` BIGINT( 4 ) NULL AFTER `description`;


-- Query to set relation for categroy_id in app_info_master

ALTER TABLE `app_info_master` ADD FOREIGN KEY ( `category_id` ) REFERENCES `dizzion`.`category_master` (
`id`
) ON DELETE CASCADE ON UPDATE CASCADE ;


-- Query to update existing apps to map the default category

UPDATE `app_info_master` SET category_id = 1; 


-- Query to create iframe in app_info_master

ALTER TABLE `app_info_master` ADD `iframe` ENUM( 'Y', 'N' ) NULL AFTER `icon_type`; 


-- Query to create icon_color in app_info_master

ALTER TABLE `app_info_master` ADD `icon_color` VARCHAR( 20 ) NULL AFTER `icon_type`; 


TRUNCATE TABLE `AuthItem`;
--
-- Dumping data for table `AuthItem`
--

INSERT INTO `AuthItem` (`name`, `type`, `description`, `bizrule`, `data`) VALUES
('Admin', 2, 'SuperAdmin', NULL, 'N;'),
('Administrator.Applicationaccess.Accesscheck', 0, NULL, NULL, 'N;'),
('Administrator.Applicationaccess.Createappaccess', 0, NULL, NULL, 'N;'),
('Administrator.Applicationaccess.Createappaccessname', 0, NULL, NULL, 'N;'),
('Administrator.Applicationaccess.Namestatuschange', 0, NULL, NULL, 'N;'),
('Administrator.Applicationaccess.Popupapplist', 0, NULL, NULL, 'N;'),
('Administrator.Applications.Create', 0, NULL, NULL, 'N;'),
('Administrator.Applications.Dashboard', 0, NULL, NULL, 'N;'),
('Administrator.Applications.List', 0, NULL, NULL, 'N;'),
('Administrator.Applications.Statuschange', 0, NULL, NULL, 'N;'),
('Administrator.Applications.Update', 0, NULL, NULL, 'N;'),
('Administrator.Category.*', 1, NULL, NULL, 'N;'),
('Administrator.Category.Create', 0, NULL, NULL, 'N;'),
('Administrator.Category.List', 0, NULL, NULL, 'N;'),
('Administrator.Category.Statuschange', 0, NULL, NULL, 'N;'),
('Administrator.Organisations.Create', 0, NULL, NULL, 'N;'),
('Administrator.Organisations.Statuschange', 0, NULL, NULL, 'N;'),
('Administrator.Users.Create', 0, NULL, NULL, 'N;'),
('Administrator.Users.Getaccessname', 0, NULL, NULL, 'N;'),
('Administrator.Users.Loadobjectsid', 0, NULL, NULL, 'N;'),
('Administrator.Users.Statuschange', 0, NULL, NULL, 'N;'),
('Authorized', 2, 'Authenticated user', NULL, 'N;'),
('Customer', 2, 'Customer', NULL, 'N;'),
('GlobalAdmin', 2, 'GlobalAdmin', NULL, 'N;'),
('Guest', 2, NULL, NULL, 'N;'),
('User.Authentication.Application', 0, NULL, NULL, 'N;'),
('User.Authentication.Categoryapplist', 0, NULL, NULL, 'N;'),
('User.Authentication.Dashboard', 0, NULL, NULL, 'N;'),
('User.Authentication.Login', 0, NULL, NULL, 'N;'),
('User.Authentication.Logout', 0, NULL, NULL, 'N;');

TRUNCATE TABLE `AuthItemChild`;

--
-- Dumping data for table `AuthItemChild`
--


INSERT INTO `AuthItemChild` (`parent`, `child`) VALUES
('GlobalAdmin', 'Administrator.Applicationaccess.Accesscheck'),
('GlobalAdmin', 'Administrator.Applicationaccess.Createappaccess'),
('GlobalAdmin', 'Administrator.Applicationaccess.Createappaccessname'),
('GlobalAdmin', 'Administrator.Applicationaccess.Namestatuschange'),
('GlobalAdmin', 'Administrator.Applicationaccess.Popupapplist'),
('GlobalAdmin', 'Administrator.Applications.Create'),
('GlobalAdmin', 'Administrator.Applications.Dashboard'),
('GlobalAdmin', 'Administrator.Applications.List'),
('GlobalAdmin', 'Administrator.Applications.Statuschange'),
('GlobalAdmin', 'Administrator.Applications.Update'),
('GlobalAdmin', 'Administrator.Category.Create'),
('GlobalAdmin', 'Administrator.Category.List'),
('GlobalAdmin', 'Administrator.Category.Statuschange'),
('GlobalAdmin', 'Administrator.Organisations.Create'),
('GlobalAdmin', 'Administrator.Organisations.Statuschange'),
('GlobalAdmin', 'Administrator.Users.Create'),
('GlobalAdmin', 'Administrator.Users.Getaccessname'),
('GlobalAdmin', 'Administrator.Users.Loadobjectsid'),
('GlobalAdmin', 'Administrator.Users.Statuschange'),
('Customer', 'User.Authentication.Application'),
('GlobalAdmin', 'User.Authentication.Application'),
('Customer', 'User.Authentication.Categoryapplist'),
('GlobalAdmin', 'User.Authentication.Categoryapplist'),
('Customer', 'User.Authentication.Dashboard'),
('GlobalAdmin', 'User.Authentication.Dashboard');




