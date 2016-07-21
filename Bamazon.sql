CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	ItemID INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    PRIMARY KEY(`ItemID`)
);

SELECT * FROM Products;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	ItemID INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    PRIMARY KEY(`ItemID`)
);
SELECT * FROM Products;

INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Ice Cream', 'Dairy', '2.16','1000');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('X-Box', 'Gaming', '299.99','10000');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Playstation 4', 'Gaming', '300.16','99999');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Running Shoes', 'Footwear', '99.99','7777');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Ice Cream', 'Dairy', '2.16','1000');




