-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2024 at 04:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `Id` bigint(20) NOT NULL,
  `Title` text CHARACTER SET utf8mb4 NOT NULL,
  `Datetime` datetime NOT NULL,
  `Note` longtext CHARACTER SET utf8mb4 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`Id`, `Title`, `Datetime`, `Note`, `createdAt`, `updatedAt`) VALUES
(1, 'Resep ', '2024-12-06 21:52:00', 'Bahan-bahan:\n4 butir telur\n200 gram gula pasir\n200 gram tepung terigu protein sedang\n1 sdt baking powder\n1/2 sdt vanili bubuk\n100 ml susu cair\n100 gram margarin (lelehkan)\n', '2024-12-06 02:49:26', '2024-12-06 14:53:01'),
(2, 'Daftar Belanja', '2024-12-06 22:05:00', '\nBeras\nMinyak goreng\nGula pasir\nGaram\nTelur\nBawang merah\nBawang putih\nCabai\nKecap manis\nTepung terigu', '2024-12-06 15:05:09', '2024-12-06 15:07:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
