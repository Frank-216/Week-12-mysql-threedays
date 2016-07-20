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