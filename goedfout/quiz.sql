-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2021 at 10:49 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uitdaging`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(255) NOT NULL,
  `que` text NOT NULL,
  `option 1` varchar(222) NOT NULL,
  `option 2` varchar(222) NOT NULL,
  `ans` varchar(222) NOT NULL,
  `userans` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `que`, `option 1`, `option 2`, `ans`, `userans`) VALUES
(1, 'What does PHP stand for (Hypertext Preprocessor)?', 'TRUE', 'FALSE', 'TRUE', ''),
(2, 'What will be the value of $var? (0) ', 'TRUE', 'FALSE', 'TRUE', ''),
(3, ' ____________ function in PHP Returns a list of response headers sent (or ready to send = headers_list)', 'TURE', 'FALSE', 'TRUE', ''),
(4, 'the following is the Server Side Scripting Language?(PHP)', 'TRUE', 'FALSE', 'TRUE', ''),
(5, '1 byte is normally made from 8-bit.', 'TRUE', 'FALSE', 'TRUE', ''),
(6, 'To create instance of class keyword \"new\" is not required?', 'TRUE', 'FALSE', 'FALSE', ''),
(6, 'To create instance of class keyword \"new\" is not required?', 'TRUE', 'FALSE', 'FALSE', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
