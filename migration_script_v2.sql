-- Query to add logo column in organization table

ALTER TABLE `org_master` ADD `logo` VARCHAR( 250 ) NULL AFTER `customer_id` 

-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2014 at 04:49 PM
-- Server version: 5.0.95
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dizzion`
--

-- --------------------------------------------------------

--
-- Table structure for table `theme_settings`
--

CREATE TABLE IF NOT EXISTS `theme_settings` (
  `id` bigint(4) NOT NULL auto_increment,
  `org_id` bigint(4) default NULL,
  `type` varchar(100) default NULL,
  `header` varchar(50) default NULL,
  `hover` varchar(50) default NULL,
  `link` varchar(50) default NULL,
  `button` varchar(50) default NULL,
  `created_by` bigint(4) default NULL,
  `created_dt` datetime default NULL,
  `modified_by` bigint(20) default NULL,
  `modified_dt` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `theme_org_foreign_key` (`org_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `theme_settings`
--

INSERT INTO `theme_settings` (`id`, `org_id`, `type`, `header`, `hover`, `link`, `button`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 1, 'default', NULL, NULL, NULL, NULL, 1, '2014-03-03 00:00:00', NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `theme_settings`
--
ALTER TABLE `theme_settings`
  ADD CONSTRAINT `theme_settings_ibfk_1` FOREIGN KEY (`org_id`) REFERENCES `org_master` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



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
('Administrator.Themes.*', 1, NULL, NULL, 'N;'),
('Administrator.Themes.Create', 0, NULL, NULL, 'N;'),
('Administrator.Themes.Getcolorcode', 0, NULL, NULL, 'N;'),
('Administrator.Themes.Orglist', 0, NULL, NULL, 'N;'),
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
('User.Authentication.Logout', 0, NULL, NULL, 'N;'),
('User.Authentication.Search', 0, NULL, NULL, 'N;');



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
('GlobalAdmin', 'Administrator.Themes.Create'),
('GlobalAdmin', 'Administrator.Themes.Getcolorcode'),
('GlobalAdmin', 'Administrator.Themes.Orglist'),
('GlobalAdmin', 'Administrator.Users.Create'),
('GlobalAdmin', 'Administrator.Users.Getaccessname'),
('GlobalAdmin', 'Administrator.Users.Loadobjectsid'),
('GlobalAdmin', 'Administrator.Users.Statuschange'),
('Customer', 'User.Authentication.Application'),
('GlobalAdmin', 'User.Authentication.Application'),
('Customer', 'User.Authentication.Categoryapplist'),
('GlobalAdmin', 'User.Authentication.Categoryapplist'),
('Customer', 'User.Authentication.Dashboard'),
('GlobalAdmin', 'User.Authentication.Dashboard'),
('Customer', 'User.Authentication.Search'),
('GlobalAdmin', 'User.Authentication.Search');

