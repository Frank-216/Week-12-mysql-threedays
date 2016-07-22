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

console.log("Welcome to Bamazon Below are the items for sale!");
console.log("");
// query to display ID, Item, Price 
// COnsole table to display the items in the table 


var promptCustomer = function(res) {
        //PROMPTS USER FOR WHAT THEY WOULD LIKE TO PURCHASE//
        inquirer.prompt([{
            type: 'input',
            name: 'choice',
            message: 'What would you like to purchase?'
        }]).then(function(val) {
        	console.log(val);

                //SET THE VAR correct TO FALSE SO AS TO MAKE SURE THE USER INPUTS A VALID PRODUCT NAME//
                var correct = false;
                //LOOPS THROUGH THE MYSQL TABLE TO CHECK THAT THE PRODUCT THEY WANTED EXISTS//
                for (var i = 0; i < res.length; i++) {                    	
	                //1. TODO: IF THE PRODUCT EXISTS, SET correct = true and ASK THE USER TO SEE HOW MANY OF THE PRODUCT THEY WOULD LIKE TO BUY//
	               	//2. TODO: CHECK TO SEE IF THE AMOUNT REQUESTED IS LESS THAN THE AMOUNT THAT IS AVAILABLE//                       
	                //3. TODO: UPDATE THE MYSQL TO REDUCE THE StockQuanaity by the THE AMOUNT REQUESTED  - UPDATE COMMAND!
	                //4. TODO: SHOW THE TABLE again by calling the function that makes the table
                }

                //IF THE PRODUCT REQUESTED DOES NOT EXIST, RESTARTS PROMPT//
                if (i == res.length && correct == false) {
                    promptCustomer(res);
                }
            });
}
connection.query('SELECT ItemID,ProductName,Price FROM Products', function(err, res){
    console.table(res);
});
// Call promptCustomers
promptCustomer();
