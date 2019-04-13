/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : localhost:3306
 Source Schema         : wbar

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 13/04/2019 09:58:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_car
-- ----------------------------
DROP TABLE IF EXISTS `t_car`;
CREATE TABLE `t_car`  (
  `carId` int(11) NOT NULL AUTO_INCREMENT,
  `carName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cTypeId` int(11) NOT NULL,
  `brandId` int(11) NOT NULL,
  `plate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pictures` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(10, 2) DEFAULT NULL,
  `isOnline` int(11) DEFAULT NULL,
  `isDeleted` int(11) DEFAULT NULL,
  `lId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `files` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`carId`) USING BTREE,
  INDEX `FK_lId`(`lId`) USING BTREE,
  INDEX `FK_userId`(`userId`) USING BTREE,
  INDEX `FK_brandId`(`brandId`) USING BTREE,
  INDEX `FK_cTypeId`(`cTypeId`) USING BTREE,
  CONSTRAINT `FK_brandId` FOREIGN KEY (`brandId`) REFERENCES `t_carbrand` (`brandId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_cTypeId` FOREIGN KEY (`cTypeId`) REFERENCES `t_cartype` (`cTypeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_lId` FOREIGN KEY (`lId`) REFERENCES `t_location` (`lId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_userId` FOREIGN KEY (`userId`) REFERENCES `t_user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_carbrand
-- ----------------------------
DROP TABLE IF EXISTS `t_carbrand`;
CREATE TABLE `t_carbrand`  (
  `brandId` int(11) NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`brandId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_cartype
-- ----------------------------
DROP TABLE IF EXISTS `t_cartype`;
CREATE TABLE `t_cartype`  (
  `cTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `cTypeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cTypeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_city
-- ----------------------------
DROP TABLE IF EXISTS `t_city`;
CREATE TABLE `t_city`  (
  `cId` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pId` int(11) DEFAULT NULL,
  PRIMARY KEY (`cId`) USING BTREE,
  INDEX `FK_pId`(`pId`) USING BTREE,
  CONSTRAINT `FK_pId` FOREIGN KEY (`pId`) REFERENCES `t_province` (`pId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_location
-- ----------------------------
DROP TABLE IF EXISTS `t_location`;
CREATE TABLE `t_location`  (
  `lId` int(11) NOT NULL AUTO_INCREMENT,
  `lName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cId` int(11) DEFAULT NULL,
  PRIMARY KEY (`lId`) USING BTREE,
  INDEX `FK_cId`(`cId`) USING BTREE,
  CONSTRAINT `FK_cId` FOREIGN KEY (`cId`) REFERENCES `t_city` (`cId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_news
-- ----------------------------
DROP TABLE IF EXISTS `t_news`;
CREATE TABLE `t_news`  (
  `newsId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `creatTime` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`newsId`) USING BTREE,
  INDEX `FK_UserIdN`(`userId`) USING BTREE,
  CONSTRAINT `FK_UserIdN` FOREIGN KEY (`userId`) REFERENCES `t_user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_order
-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order`  (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `carId` int(11) NOT NULL,
  `creatTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `totalPrice` decimal(10, 2) DEFAULT NULL,
  `isPaid` int(11) DEFAULT NULL,
  PRIMARY KEY (`orderId`) USING BTREE,
  INDEX `FK_userIdO`(`userId`) USING BTREE,
  INDEX `FK_carId`(`carId`) USING BTREE,
  CONSTRAINT `FK_carId` FOREIGN KEY (`carId`) REFERENCES `t_car` (`carId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_userIdO` FOREIGN KEY (`userId`) REFERENCES `t_user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_province
-- ----------------------------
DROP TABLE IF EXISTS `t_province`;
CREATE TABLE `t_province`  (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `pName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`pId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uTypeId` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `isDeleted` int(11) DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  INDEX `FK_uTypeId`(`uTypeId`) USING BTREE,
  CONSTRAINT `FK_uTypeId` FOREIGN KEY (`uTypeId`) REFERENCES `t_usertype` (`uTypeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_usertype
-- ----------------------------
DROP TABLE IF EXISTS `t_usertype`;
CREATE TABLE `t_usertype`  (
  `uTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `uTypeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`uTypeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
