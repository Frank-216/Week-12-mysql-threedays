// require mysql 
var mysql = require('mysql');
// require console.table to easily print table to the console. 
var consoleTable = require('console.table');
// Require Inquirer
var inquirer = require('inquirer');
// set up connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"
})
// ensure that connection is running and display the port 
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})
// The function below can be used to enter values into the database.   
// Items can also be added via the workbench

// connection.query("INSERT INTO Products SET ?", {
//     // Ask if I need to update the idem that is Auto Incremented
//     ItemID: ,
//     ProductName: "Alienware 15inch",
//     DepartmentName:"Computers",
//     Price:1399.99,
//     StockQuantity:1000
// }, function(err, res) {
//     console.log(res);
// });


// query to display ID, Item, Price 
connection.query('SELECT ItemID,ProductName,Price FROM Products', function(err, res){
    console.log(res);
});