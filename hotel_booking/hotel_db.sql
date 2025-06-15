-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Jun 2025 pada 11.53
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `room_type` varchar(255) NOT NULL,
  `checkin` datetime NOT NULL,
  `checkout` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bookings`
--

INSERT INTO `bookings` (`id`, `name`, `email`, `room_type`, `checkin`, `checkout`, `createdAt`, `updatedAt`) VALUES
(1, 'Andi hermawan', 'andi01@gmail.com', 'single', '2025-06-08 00:00:00', '2025-06-09 00:00:00', '2025-06-08 11:43:08', '2025-06-08 11:43:08'),
(2, 'Fransiska', 'siska02@gmail.com', 'single', '2025-06-08 00:00:00', '2025-06-10 00:00:00', '2025-06-08 11:44:15', '2025-06-08 11:44:15'),
(3, 'Dinda maharani', 'mahadinda1@gmail.com', 'kingsize', '2025-06-08 00:00:00', '2025-06-11 00:00:00', '2025-06-08 11:49:03', '2025-06-08 11:49:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `room_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `reservations`
--

INSERT INTO `reservations` (`id`, `customer_name`, `room_id`, `createdAt`, `updatedAt`) VALUES
(1, 'andi', 3, '2025-06-08 11:40:55', '2025-06-08 11:40:55'),
(2, 'siska', 1, '2025-06-08 11:41:18', '2025-06-08 11:41:18'),
(3, 'dinda', 2, '2025-06-08 11:44:55', '2025-06-08 11:44:55'),
(4, 'fauzi', 3, '2025-06-08 11:45:26', '2025-06-08 11:45:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `rooms`
--

INSERT INTO `rooms` (`id`, `name`, `type`, `price`) VALUES
(1, 'Deluxe A', 'Deluxe', 500000),
(2, 'Superior B', 'Superior', 350000),
(3, 'Suite C', 'Suite', 800000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2b$10$MwBoAe1JN1bmemUlhaCZmurxPOuHH0FKrY.o3/QF/yK3/ivggfwo2', '2025-06-08 11:39:40', '2025-06-08 11:39:40');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indeks untuk tabel `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `username_8` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
