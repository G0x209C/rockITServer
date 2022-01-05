-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 09, 2021 at 09:16 PM
-- Server version: 5.7.36-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `code` varchar(5) DEFAULT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(20) DEFAULT NULL,
  `chatmsg` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`code`, `datetime`, `name`, `chatmsg`) VALUES
('QGPLH', '2021-11-05 21:23:13', 'ankh', 'hiii'),
('ZELJA', '2021-11-26 10:55:16', 'aawd', 'adw'),
('ZELJA', '2021-11-26 10:55:17', 'aawd', ''),
('MMWMZ', '2021-11-26 11:13:01', 'cvbnc', ''),
('MMWMZ', '2021-11-26 11:13:02', 'cvbnc', ''),
('MMWMZ', '2021-11-26 11:40:13', 'cvbnc', 'rt'),
('', '2021-11-26 13:04:11', '', 'aawdf'),
('', '2021-11-26 13:04:13', '', 'srfg'),
('', '2021-11-26 13:04:15', '', 'awef'),
('', '2021-11-26 13:09:06', '', 'awdf'),
('', '2021-11-26 13:11:16', '', ''),
('', '2021-11-26 13:11:17', '', 'awd'),
('', '2021-11-26 13:11:53', '', 'awd'),
('', '2021-11-26 13:12:07', '', 'awd'),
('', '2021-11-26 13:12:08', '', ''),
('', '2021-11-26 13:12:09', '', 'dfbhdhb'),
('', '2021-11-26 13:28:19', '', 'wdwa'),
('', '2021-11-26 13:28:25', '', 'wsadasfc'),
('', '2021-11-26 13:29:53', '', 'wdaws'),
('', '2021-11-26 13:34:25', '', 'sdf'),
('', '2021-11-26 22:32:58', '', ''),
('', '2021-11-28 07:16:59', '', 'test'),
('', '2021-11-28 11:06:23', '', 'sdfasf'),
('', '2021-11-29 08:28:03', '', 'kgu'),
('', '2021-11-29 08:58:03', '', 'Bro het werkt goed'),
('', '2021-12-02 12:28:17', '', 'Niet echt, want het haalt chats op van vorige games'),
('AXFKB', '2021-12-07 09:44:15', 'alex', ''),
('AXFKB', '2021-12-07 09:44:16', 'alex', ''),
('AXFKB', '2021-12-07 09:44:18', 'alex', 'awdwa'),
('AXFKB', '2021-12-07 09:51:41', 'alex', 'awd'),
('AXFKB', '2021-12-07 09:51:54', '111', 'awda'),
('', '2021-12-07 10:04:46', '', 'awd'),
('EUQWC', '2021-12-08 10:25:15', 'aaa', 'dwad'),
('EUQWC', '2021-12-08 10:27:29', 'aaa', 'awdw'),
('EUQWC', '2021-12-08 10:27:40', 'aaa', 'ddaw'),
('EUQWC', '2021-12-08 10:27:44', 'aaa', 'awd'),
('', '2021-12-08 10:27:55', '', 'awd'),
('', '2021-12-08 10:31:57', '', ''),
(NULL, '2021-12-08 10:33:03', NULL, NULL),
('', '2021-12-08 10:33:07', '', 'asf'),
('', '2021-12-08 10:33:12', '', 'awsdf'),
('', '2021-12-08 10:33:16', '', 'awd'),
('', '2021-12-08 10:34:23', '', 'dawd'),
('', '2021-12-08 10:34:31', '', 'awd'),
('QHPHP', '2021-12-08 10:34:39', 'alex', 'aa'),
('QHPHP', '2021-12-08 10:37:26', 'alex', 'dawd'),
(NULL, '2021-12-08 10:37:29', NULL, NULL),
('', '2021-12-08 10:37:34', '', 'daw'),
('', '2021-12-08 10:37:38', '', 'dad'),
(NULL, '2021-12-08 10:43:43', NULL, NULL),
('', '2021-12-08 10:43:46', '', 'wad'),
('', '2021-12-08 10:44:08', '', 'dw'),
('', '2021-12-08 10:44:15', '', 'dd'),
('', '2021-12-08 10:44:20', '', 'd'),
('QHPHP', '2021-12-08 11:09:56', 'alex', 'awd'),
('', '2021-12-08 11:10:48', '', 'da'),
('', '2021-12-08 11:10:52', '', 'aa'),
('', '2021-12-08 17:55:17', '', 'd'),
('', '2021-12-08 18:41:07', '', 'awd'),
('', '2021-12-08 18:41:10', '', 'awd'),
('', '2021-12-08 18:41:53', '', 'awd'),
('', '2021-12-08 18:41:55', '', 'fwaf'),
('LOSQR', '2021-12-08 18:42:06', 'asd', 'awdwa'),
('', '2021-12-08 18:42:37', '', 'awd'),
('WDDLE', '2021-12-08 18:43:12', 'test1', 'awdaw'),
('', '2021-12-08 18:43:39', '', 'awdwa'),
('KFJNR', '2021-12-08 18:44:59', 'awdawdwa', 'awdwa'),
('VLOLU', '2021-12-08 18:45:56', 'test22', 'awdwa'),
('VLOLU', '2021-12-08 18:46:24', 'test22sss', 'awdawd'),
('', '2021-12-08 18:47:32', '', 'awdawdfa'),
('PCHTB', '2021-12-08 18:47:34', 'alex', 'awdawd');

-- --------------------------------------------------------

--
-- Table structure for table `control`
--

CREATE TABLE `control` (
  `code` varchar(5) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `point` int(6) DEFAULT NULL,
  `rol` varchar(6) DEFAULT NULL,
  `currentscreen` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `control`
--

INSERT INTO `control` (`code`, `name`, `point`, `rol`, `currentscreen`) VALUES
('QGPLH', 'ankh', NULL, 'host', NULL),
('MAHVQ', 'alex', NULL, 'host', 'menu.html'),
('MAHVQ', 'alexdd', NULL, 'speler', 'GOmenu.html'),
('ZELJA', 'a', NULL, 'host', NULL),
('LFQHJ', 'aawd', NULL, 'host', NULL),
('OFEQR', 'a', NULL, 'host', NULL),
('MMWMZ', 'cvbnc', NULL, 'host', NULL),
('YPOCO', 'adw', NULL, 'host', NULL),
('TDLEG', 'awd', NULL, 'host', 'GOmenu.html'),
('TDLEG', 'agfed', NULL, 'speler', 'GOmenu.html'),
('KPNQE', 'aaa', NULL, 'host', 'GOmenu.html'),
('KPNQE', 'ageg', NULL, 'speler', 'GOmenu.html'),
('EMRIR', 'yousif', NULL, 'host', 'menu.html'),
('EMRIR', 'alex', NULL, 'speler', 'GOmenu.html'),
('KWKVJ', 'a', NULL, 'host', NULL),
('VVMEA', 'qq', NULL, 'host', NULL),
('NIZYL', 'ddd', NULL, 'host', 'menu.html'),
('NIZYL', 'alex', NULL, 'speler', 'GOmenu.html'),
('ZDCPA', 'dd', NULL, 'host', 'menu.html'),
('ZDCPA', 'qq', NULL, 'speler', 'GOmenu.html'),
('WXDUT', 'michel', NULL, 'host', 'GOmenu.html'),
('WXDUT', 'michel2', NULL, 'speler', 'GOmenu.html'),
('GPGYZ', 'test', NULL, 'host', 'menu.html'),
('GPGYZ', 'test2', NULL, 'speler', 'menu.html'),
('HMFEN', 'aap1', NULL, 'host', 'menu.html'),
('HMFEN', 'aap2', NULL, 'speler', 'menu.html'),
('HMFEN', 'aap3', NULL, 'speler', 'menu.html'),
('HMFEN', 'aap4', NULL, 'speler', 'menu.html'),
('AXFKB', 'alex', NULL, 'host', 'menu.html'),
('AXFKB', '111', NULL, 'speler', 'menu.html'),
('YFGPF', 'alex', NULL, 'host', 'menu.html'),
('YFGPF', 'alex1', NULL, 'speler', 'GOmenu.html'),
('YFGPF', 'alex2', NULL, 'speler', 'menu.html'),
('EUQWC', 'aaa', NULL, 'host', ''),
('EUQWC', 'asdd', NULL, 'speler', 'GO'),
('QHPHP', 'alex', NULL, 'host', 'menu.html'),
('QHPHP', 'alex1', NULL, 'speler', 'GOmenu.html'),
('QHPHP', 'alex12', NULL, 'speler', 'GOmenu.html'),
('QHPHP', 'alex00', NULL, 'speler', 'GOmenu.html'),
('QHPHP', 'alex0022', NULL, 'speler', 'GOmenu.html'),
('QHPHP', 'alex00225', NULL, 'speler', 'menu.html'),
('LOSQR', 'asd', NULL, 'host', 'menu.html'),
('LOSQR', 'asdd', NULL, 'speler', 'GOmenu.html'),
('WDDLE', 'test1', NULL, 'host', 'menu.html'),
('WDDLE', 'test12', NULL, 'speler', 'menu.html'),
('KFJNR', 'awdawdwa', NULL, 'host', 'menu.html'),
('KFJNR', 'awdawawdwadaw', NULL, 'speler', 'GOmenu.html'),
('VLOLU', 'test22', NULL, 'host', 'menu.html'),
('VLOLU', 'test22sss', NULL, 'speler', 'menu.html'),
('FEEAW', 'alex111', NULL, 'host', NULL),
('PCHTB', 'alex1113', NULL, 'host', 'GOmenu.html'),
('PCHTB', 'alex', NULL, 'speler', 'menu.html'),
('IHORF', 'test', NULL, 'host', 'menu.html'),
('IHORF', 'alex', NULL, 'speler', 'menu.html'),
('GUDMP', 'alex', NULL, 'host', 'menu.html'),
('GUDMP', 'alex222', NULL, 'speler', 'menu.html');

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
  `userans` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `que`, `option 1`, `option 2`, `ans`, `userans`) VALUES
(1, 'What does PHP stand for (Hypertext Preprocessor)?', 'TRUE', 'FALSE', 'TRUE', 'TRUE'),
(2, 'What will be the value of $var? (0) ', 'TRUE', 'FALSE', 'TRUE', 'TRUE'),
(3, ' ____________ function in PHP Returns a list of response headers sent (or ready to send = headers_list)', 'TURE', 'FALSE', 'TRUE', 'TURE'),
(4, 'the following is the Server Side Scripting Language?(PHP)', 'TRUE', 'FALSE', 'TRUE', 'TRUE'),
(5, '1 byte is normally made from 8-bit.', 'TRUE', 'FALSE', 'TRUE', 'TRUE'),
(6, 'To create instance of class keyword \"new\" is not required?', 'TRUE', 'FALSE', 'FALSE', 'TRUE'),
(6, 'To create instance of class keyword \"new\" is not required?', 'TRUE', 'FALSE', 'FALSE', 'TRUE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD KEY `code` (`code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
