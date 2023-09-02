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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barbers`
--

LOCK TABLES `barbers` WRITE;
/*!40000 ALTER TABLE `barbers` DISABLE KEYS */;
INSERT INTO `barbers` VALUES (4,11,'amit',28,'Male'),(5,12,'pooja',32,'Female'),(6,11,'abhijit',24,'Male'),(7,11,'vikas',85,'Male'),(9,11,'ganesh',21,'male'),(10,31,'kaustubh',30,'male');
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
  `salon_id` int DEFAULT NULL,
  PRIMARY KEY (`billing_id`),
  KEY `customer_idbt_idx` (`customer_id`),
  KEY `FKtripcymqpkctyc5rrga1n0e4j` (`salon_id`),
  CONSTRAINT `customer_idbt` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `FKtripcymqpkctyc5rrga1n0e4j` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`salon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billings`
--

LOCK TABLES `billings` WRITE;
/*!40000 ALTER TABLE `billings` DISABLE KEYS */;
INSERT INTO `billings` VALUES (1,1,'2023-08-01 10:00:00',350.00,'unpaid',12),(2,3,'2023-08-10 15:30:00',300.50,'unpaid',12),(3,10,'2023-08-26 00:00:00',2000.00,'unpaid',NULL),(151,3,'2023-08-26 00:00:00',3050.00,'unpaid',12),(152,3,'2023-08-26 00:00:00',3050.00,'unpaid',12),(173,9,'2023-08-26 00:00:00',1150.00,'unpaid',12),(174,9,'2023-08-26 00:00:00',1150.00,'unpaid',NULL),(175,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(176,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(177,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(178,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(179,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(180,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(181,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(182,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(183,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(184,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(185,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(186,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(187,9,'2023-08-27 00:00:00',1150.00,'unpaid',NULL),(188,3,'2023-08-27 00:00:00',2300.00,'unpaid',NULL),(189,3,'2023-08-27 00:00:00',2300.00,'unpaid',NULL),(190,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(191,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(192,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(193,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(194,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(195,5,'2023-08-27 00:00:00',500.00,'unpaid',NULL),(196,13,'2023-08-27 00:00:00',550.00,'unpaid',NULL),(197,13,'2023-08-27 00:00:00',550.00,'unpaid',NULL),(198,16,'2023-08-27 00:00:00',300.00,'unpaid',NULL),(199,16,'2023-08-27 00:00:00',300.00,'unpaid',NULL),(200,9,'2023-09-01 00:00:00',650.00,'unpaid',NULL),(201,9,'2023-09-01 00:00:00',650.00,'unpaid',NULL);
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
  `salon_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `service_idb_idx` (`service_id`),
  KEY `barber_idb_idx` (`barber_id`),
  KEY `customer_idb_idx` (`customer_id`),
  KEY `slot_idb_idx` (`tid`),
  KEY `FKt638tl0q4baxbnh20epgpn4gr` (`salon_id`),
  CONSTRAINT `barber_idb` FOREIGN KEY (`barber_id`) REFERENCES `barbers` (`barber_id`),
  CONSTRAINT `customer_idb` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `FKt638tl0q4baxbnh20epgpn4gr` FOREIGN KEY (`salon_id`) REFERENCES `salons` (`salon_id`),
  CONSTRAINT `service_idb` FOREIGN KEY (`service_id`) REFERENCES `services` (`serviceID`),
  CONSTRAINT `slot_idb` FOREIGN KEY (`tid`) REFERENCES `time_slots` (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (3,3,5,3,1,'Confirmed',12),(4,2,5,3,5,'booked',12),(5,2,5,3,5,'booked',12),(6,2,5,3,5,'booked',12),(16,1,5,3,6,'booked',12),(17,1,5,3,6,'booked',12),(18,1,5,3,6,'booked',12),(19,1,5,3,6,'booked',12),(20,2,5,1,3,'booked',12),(21,3,5,3,2,'booked',12),(22,3,5,3,8,'booked',12),(23,2,5,3,11,'booked',12),(26,1,6,4,5,'booked',NULL),(30,4,6,10,1,'booked',NULL),(31,4,6,10,2,'booked',NULL),(33,4,6,9,4,'booked',NULL),(40,2,10,16,3,'booked',NULL),(41,2,10,16,3,'booked',NULL),(42,1,4,1,1,'booked',11),(43,2,5,9,7,'booked',12);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,1,'John','Smith','john.smith@email.com','1234567890','123 Main St, City',NULL),(2,2,'Jane','Doe','jane.doe@email.com','9876543210','456 Elm St, Town',NULL),(3,3,'Michael','Johnson','michael@email.com','5555555555','789 Oak Ave, Village',NULL),(4,4,'Emily','Williams','emily@email.com','3333333333','567 Maple Rd, Hamlet',NULL),(5,17,'Anmol','Patil','anmolpatil.5241@gmail.com','9860098882','sdnkdaskasd','Male'),(8,20,'Ashwin','Ubare','ashwin.5241@gmail.com','9860098882','Gokhalenagar,Pune','Male'),(9,21,'Bhairavsing','Patil','bhairav.5241@gmail.com','9860098882','Gokhalenagar,Pune','Male'),(10,30,'Rupesh','Gholap','rupesh.5241@gmail.com','9860098882','jakdnsdnasjkdsa','Male'),(11,31,'Vipul','Belekar','vipul.5241@gmail.com','9860098882','sdnkdaskasd','Male'),(12,33,'Mohsin','Shaikh','mohsin@gmail.com','9373349241','Gokhalenagar,Pune','Male'),(13,36,'Shreenand','Patil','anmolpatil.5241@gmail.com','9922333087','Gokhalenagar,Pune','Male'),(16,41,'Arjun','Patil','ashwinubare@gmail.com','9922333087','jakdnsdnasjkdsa','Male');
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'2023-08-01',1,'hash_cus'),(2,'2023-08-02',2,'hashed_salon_password'),(3,'2023-08-03',1,'hashed_customer_password'),(4,'2023-08-04',1,'hashed_salon_password'),(5,'22/02/2005',1,'password'),(6,'22/02/2005',1,'password'),(7,'22/02/2005',1,'password'),(8,'22/02/2005',1,'password'),(9,'22/02/2005',1,'password'),(10,'22/02/2005',1,'password'),(11,'23/08/2023 15:28:49',2,NULL),(12,'23/08/2023 18:27:01',2,'hashed_customer_password'),(13,'24/08/2023 01:10:28',2,'password'),(14,'24/08/2023 17:25:01',2,'password'),(15,'26/08/2023 10:05:50',2,NULL),(16,'26/08/2023 10:06:12',2,NULL),(17,'26/08/2023 10:36:04',1,'Anmol@123'),(18,'26/08/2023 10:46:14',1,NULL),(19,'26/08/2023 10:46:34',1,NULL),(20,'26/08/2023 10:52:58',1,'Anmol@123'),(21,'26/08/2023 10:54:10',1,'Anmol@123'),(22,'26/08/2023 10:54:51',2,NULL),(23,'26/08/2023 10:55:07',2,NULL),(24,'26/08/2023 10:55:33',2,NULL),(25,'26/08/2023 10:59:22',2,'Anmol@123'),(26,'26/08/2023 11:03:08',2,'Anmol@123'),(27,'26/08/2023 11:03:31',2,'Anmol@123'),(28,'26/08/2023 11:04:32',2,'Anmol@123'),(29,'26/08/2023 11:04:55',2,'Anmol@123'),(30,'26/08/2023 12:20:56',1,'Anmol@123'),(31,'26/08/2023 14:22:05',1,'Anmol@123'),(32,'26/08/2023 14:22:05',3,'Bhai@123'),(33,'27/08/2023 13:14:00',1,'A@123'),(34,'27/08/2023 13:17:02',2,'B@123'),(35,'27/08/2023 13:17:05',2,'B@123'),(36,'27/08/2023 14:26:31',1,'221b#Bhairav'),(37,'27/08/2023 14:32:46',2,'221b#Bhai'),(41,'27/08/2023 16:40:18',1,'221b#Arjun'),(42,'27/08/2023 16:46:04',2,'221b#Excellent'),(43,'27/08/2023 16:46:46',2,'221b#Excellent'),(44,'27/08/2023 16:46:59',2,'221b#Excellent');
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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salons`
--

LOCK TABLES `salons` WRITE;
/*!40000 ALTER TABLE `salons` DISABLE KEYS */;
INSERT INTO `salons` VALUES (11,'Salon B',2,2,'Address B','email2@example.com','1438758327'),(12,'Salon A',1,1,'Address A','email1@example.com','1234567890'),(13,'Amol',7,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(14,'Amol',8,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(15,'Rupa',9,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(16,'Rupa',10,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(17,'Rupa',13,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(18,'Rupa',14,1,'Apka Ghar','anmolpatil.5241@gmail.com','9860098882'),(19,'Rupa',15,1,NULL,'anmolpatil.5241@gmail.com','9922333087'),(20,'Rupa',16,1,NULL,'anmolpatil.5241@gmail.com','9922333087'),(21,'Rupa',22,1,NULL,'shreenandwr@gmail.com','9860098882'),(22,'Rupa',23,1,NULL,'shreenandwr@gmail.com','9860098882'),(23,'Rupuesh',24,1,NULL,'shreenandwr@gmail.com','9860098882'),(24,'Rupuesh',25,1,NULL,'shreenandwr@gmail.com','9860098882'),(25,'Rupuesh',26,1,NULL,'shreenandwr@gmail.com','9860098882'),(26,'Rupuesh',27,1,NULL,'shreenandwr@gmail.com','9860098882'),(27,'Rupuesh',28,1,'Gokhalenagar,Pune','shreenandwr@gmail.com','9860098882'),(28,'Rupuesh',29,1,'Gokhalenagar,Pune','shreenandwr@gmail.com','9860098882'),(29,'Bhairav',34,1,'Gokhalenagar,Pune','bhairavsing221b@gmail.com','8600223636'),(30,'Bhairav',35,1,'Gokhalenagar,Pune','bhairavsing221b@gmail.com','8600223636'),(31,'HairSalon',37,1,'sdbdsnmdasbndm','anmolpatil.5241@gmail.com','9922333087'),(33,'Excellent',42,1,'Gokhalenagar,Pune','anmolpatil.1184@gmail.com','8600223636'),(34,'Excellent',43,1,'Gokhalenagar,Pune','anmolpatil.1184@gmail.com','8600223636'),(35,'Excellent',44,1,'Gokhalenagar,Pune','anmolpatil.1184@gmail.com','8600223636');
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

-- Dump completed on 2023-09-01 22:21:52
