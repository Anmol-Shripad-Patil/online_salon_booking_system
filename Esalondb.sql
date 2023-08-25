CREATE DATABASE  IF NOT EXISTS `esalon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `esalon`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: esalon
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `barbers`
--

DROP TABLE IF EXISTS `barbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barbers` (
  `barber_id` int NOT NULL AUTO_INCREMENT,
  `salon_id` int NOT NULL,
  `barber_name` varchar(20) NOT NULL,
  `age` int NOT NULL,
  `gender` varchar(10) NOT NULL,
  PRIMARY KEY (`barber_id`),
  KEY `salon_idb_idx` (`salon_id`),
  CONSTRAINT `salon_idb` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`salon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barbers`
--

LOCK TABLES `barbers` WRITE;
/*!40000 ALTER TABLE `barbers` DISABLE KEYS */;
INSERT INTO `barbers` VALUES (4,11,'Barber A',28,'Male'),(5,12,'Barber B',32,'Female'),(6,11,'Barber C',24,'Male');
/*!40000 ALTER TABLE `barbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billings`
--

DROP TABLE IF EXISTS `billings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billings` (
  `billing_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `billing_date` datetime NOT NULL,
  `total_amount` decimal(7,2) NOT NULL,
  `payment_status` varchar(10) NOT NULL DEFAULT 'unpaid',
  PRIMARY KEY (`billing_id`),
  KEY `customer_idbt_idx` (`customer_id`),
  CONSTRAINT `customer_idbt` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billings`
--

LOCK TABLES `billings` WRITE;
/*!40000 ALTER TABLE `billings` DISABLE KEYS */;
INSERT INTO `billings` VALUES (1,1,'2023-08-01 10:00:00',350.00,'unpaid'),(2,3,'2023-08-10 15:30:00',300.50,'unpaid');
/*!40000 ALTER TABLE `billings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `service_id` int NOT NULL,
  `barber_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `tid` int NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `service_idb_idx` (`service_id`),
  KEY `barber_idb_idx` (`barber_id`),
  KEY `customer_idb_idx` (`customer_id`),
  KEY `slot_idb_idx` (`tid`),
  CONSTRAINT `barber_idb` FOREIGN KEY (`barber_id`) REFERENCES `barbers` (`barber_id`),
  CONSTRAINT `customer_idb` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `service_idb` FOREIGN KEY (`service_id`) REFERENCES `services` (`serviceID`),
  CONSTRAINT `slot_idb` FOREIGN KEY (`tid`) REFERENCES `time_slots` (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,1,4,1,1,'Confirmed'),(2,2,4,1,2,'Pending'),(3,3,5,3,1,'Confirmed'),(4,2,5,3,5,'booked'),(5,2,5,3,5,'booked'),(6,2,5,3,5,'booked'),(7,1,4,1,1,'booked'),(8,1,4,1,1,'booked'),(9,1,4,1,1,'booked'),(10,1,4,1,1,'booked'),(11,1,4,1,1,'booked'),(12,1,4,1,1,'booked'),(13,3,4,3,5,'booked'),(14,3,4,3,5,'booked');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(10) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Pune'),(2,'Mumbai'),(3,'Nashik'),(4,'Nagpur');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `login_id` int NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,1,'John','Smith','john.smith@email.com','1234567890','123 Main St, City',NULL),(2,2,'Jane','Doe','jane.doe@email.com','9876543210','456 Elm St, Town',NULL),(3,3,'Michael','Johnson','michael@email.com','5555555555','789 Oak Ave, Village',NULL),(4,4,'Emily','Williams','emily@email.com','3333333333','567 Maple Rd, Hamlet',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `registration_date` varchar(255) DEFAULT NULL,
  `type_of_user` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'2023-08-01',1,'hash_cus'),(2,'2023-08-02',2,'hashed_salon_password'),(3,'2023-08-03',1,'hashed_customer_password'),(4,'2023-08-04',2,'hashed_salon_password'),(5,'22/02/2005',1,'password'),(6,'22/02/2005',1,'password'),(7,'22/02/2005',1,'password'),(8,'22/02/2005',1,'password'),(9,'22/02/2005',1,'password'),(10,'22/02/2005',1,'password'),(11,'23/08/2023 15:28:49',2,NULL),(12,'23/08/2023 18:27:01',2,'hashed_customer_password'),(13,'24/08/2023 01:10:28',2,'password'),(14,'24/08/2023 17:25:01',2,'password');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `rating` int NOT NULL,
  `comment` varchar(255) DEFAULT 'null',
  `date` datetime NOT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `customer_idr_idx` (`customer_id`),
  CONSTRAINT `customer_idr` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `chk_rating_range` CHECK (((`rating` >= 1) and (`rating` <= 5)))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,1,4,'Great service!','2023-08-19 10:00:00'),(2,2,5,'Excellent job!','2023-08-19 11:30:00'),(3,3,3,'Average experience.','2023-08-19 14:15:00');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salons`
--

DROP TABLE IF EXISTS `salons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salons` (
  `salon_id` int NOT NULL AUTO_INCREMENT,
  `salon_name` varchar(255) DEFAULT NULL,
  `login_id` int NOT NULL,
  `city_id` int NOT NULL,
  `salon_address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`salon_id`),
  KEY `login_id_idx` (`login_id`),
  KEY `city_ids_idx` (`city_id`),
  CONSTRAINT `city_ids` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`),
  CONSTRAINT `salon_isd` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salons`
--

LOCK TABLES `salons` WRITE;
/*!40000 ALTER TABLE `salons` DISABLE KEYS */;
INSERT INTO `salons` VALUES (11,'Salon B',2,2,'Address B','email2@example.com','1438758327'),(12,'Salon A',1,1,'Address A','email1@example.com','1234567890'),(13,'Amol',7,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(14,'Amol',8,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(15,'Rupa',9,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(16,'Rupa',10,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(17,'Rupa',13,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(18,'Rupa',14,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882');
/*!40000 ALTER TABLE `salons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `serviceID` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`serviceID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'HairCut',200,'A professional haircut to give you a fresh and stylish look.'),(2,'Shaving',150,'Experience a classic shaving service that leaves your skin smooth.'),(3,'Facial',300,'Revitalize your skin with a relaxing facial treatment.'),(4,'Massage',500,'Indulge in a rejuvenating massage to relieve stress and tension.'),(5,'Hair Coloring',150,'Transform your hair color with our expert hair coloring service.'),(6,'Hair Styling',120,'Get a trendy and chic hair styling that suits your personality.');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions` (
  `subscription_id` int NOT NULL AUTO_INCREMENT,
  `salon_id` int NOT NULL,
  `fees` decimal(7,2) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`subscription_id`),
  KEY `salon_ids_idx` (`salon_id`),
  CONSTRAINT `salon_ids` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`salon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions`
--

LOCK TABLES `subscriptions` WRITE;
/*!40000 ALTER TABLE `subscriptions` DISABLE KEYS */;
INSERT INTO `subscriptions` VALUES (1,11,1000.00,'2023-08-01 00:00:00','2023-08-31 00:00:00');
/*!40000 ALTER TABLE `subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_slots`
--

DROP TABLE IF EXISTS `time_slots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_slots` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_slots`
--

LOCK TABLES `time_slots` WRITE;
/*!40000 ALTER TABLE `time_slots` DISABLE KEYS */;
INSERT INTO `time_slots` VALUES (1,'10:00:00','10:30:00'),(2,'10:30:00','11:00:00'),(3,'11:00:00','11:30:00'),(4,'11:30:00','12:00:00'),(5,'13:00:00','13:30:00'),(6,'13:30:00','14:00:00'),(7,'14:00:00','14:30:00'),(8,'14:30:00','15:00:00'),(9,'15:00:00','15:30:00'),(10,'15:30:00','16:00:00'),(11,'16:00:00','16:30:00'),(12,'16:30:00','17:00:00');
/*!40000 ALTER TABLE `time_slots` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 10:22:09
