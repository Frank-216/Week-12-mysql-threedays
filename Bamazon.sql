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
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Pokemon Sun', 'Pokemon Gaming', '39.99','500');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Black Blazer', 'Clothing', '199.99','50');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Spike-Ball', 'Outdoor Games', '49.99','15');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('USA Bucket Hat', 'Clothing', '9.99','250');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Starbucks Giftcard', 'Gift-cards', '24.99','100');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Lithium Cycles', 'Bikes', '1299.99','216');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Beach Bomber Bicycle', 'Bikes', '169.99','10');
INSERT INTO `Products` (`ProductName`, `DepartmentName`, `Price`,`StockQuantity`) VALUES ('Charmander Plush Toy', 'Childrens Toys', '29.99','21');








