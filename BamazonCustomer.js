// require mysql 
var mysql = require('mysql');
// require console.table to easily print table to the console. 
var consoleTable = require('console.table');
// Require Inquirer
var inquirer = require('inquirer');
// Global Variables 
var array = [];
var checkString ='';
var queryItems =[];
var number;
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
//     StockQuantity:1000w
// }, function(err, res) {
//     console.log(res);
// });

console.log("Welcome to Bamazon Below are the items for sale!");
console.log("");
// query to display ID, Item, Price 
// COnsole table to display the items in the table 

var callInquirer = function(){
	inquirer.prompt([{
        	type: 'input',
        	name: 'amount',
        	message: "Select number of items you would: "
	}]).then(function(val){
		number = val.amount;
        console.log(number + " in function");
		return number;
	})
};

var quanityCheck = function(){

};

var promptCustomer = function() {
        //PROMPTS USER FOR WHAT THEY WOULD LIKE TO PURCHASE//
        inquirer.prompt([{
            type: 'input',
            name: 'choice',
            message: 'Please select the product ID of the proudct you like to purchase?'
        }]).then(function(val) {
        				console.log(val.choice);
        				var chosenstring= val.choice;
        				var chosenNumber = parseInt(chosenstring);
                        console.log(typeof chosenNumber);
        				// for (var i = 0; i < )
                //SET THE VAR correct TO FALSE SO AS TO MAKE SURE THE USER INPUTS A VALID PRODUCT NAME//
                var correct = false;
                var i;
                //LOOPS THROUGH THE MYSQL TABLE TO CHECK THAT THE PRODUCT THEY WANTED EXISTS//
                for(i = 0; i < queryItems.length; i++){
                	// console.log(queryItems[i]);
                	if(i == chosenNumber){
                		console.log(true)
                		var numberCall = inquirer.prompt([{
                                type: 'input',
                                name: 'amount',
                                message: "Select number of items you would: "
                         }]).then(function(val){
                            number = val.amount;
                            console.log(number + " in function");
                            connection.query("SELECT StockQuantity FROM Products WHERE ItemID = "+ chosenNumber,function(err, res){
                                // res[0].StockQuantity 
                                //update chosenNumber to be able to access the array easily
                                chosenNumber = chosenNumber-1;
                                console.log(chosenNumber);
                                // grab product name 
                                var name = queryItems[chosenNumber].ProductName;
                                // grab stock amount
                                var stock = res[0].StockQuantity;
                                // subtract requested amount from stock quantity
                                stock = stock - number;
                                // if statement.  If stock is still greater than 0 update database and display console.log that purchase was succesful
                                if(stock > 0){
                                    console.log("Successful Purchase! You have purchased "+ number + " " + name);
                                }
                            });
                          })

                        }              		
                    }
                    // SELCT StockQuanity FROM Product WHERE ItemID = number
                
	                //1. TODO: IF THE PRODUCT EXISTS, SET correct = true and ASK THE USER TO SEE HOW MANY OF THE PRODUCT THEY WOULD LIKE TO BUY//
	               	//2. TODO: CHECK TO SEE IF THE AMOUNT REQUESTED IS LESS THAN THE AMOUNT THAT IS AVAILABLE//                       
	                //3. TODO: UPDATE THE MYSQL TO REDUCE THE StockQuanaity by the THE AMOUNT REQUESTED  - UPDATE COMMAND!
	                //4. TODO: SHOW THE TABLE again by calling the function that makes the table
                

                //IF THE PRODUCT REQUESTED DOES NOT EXIST, RESTARTS PROMPT//
                if (chosenNumber > res.length ) {
                    console.log(" You did not choose a value that exists! Please choose a value that exists")
                    promptCustomer();
                }
            });
}
// display table of items
var queryCall = function(){
	connection.query('SELECT ItemID,ProductName,Price FROM Products', function(err, res){
    console.table(res);
    console.log(res.length + " length");
    for(var i = 0; i < res.length; i++){
    	queryItems.push(res[i]);
    }
    return res;
	});
    promptCustomer();
};
// add all productNames to an array DID NOT NEED THIS PIECE OF CODE 
// connection.query('SELECT * FROM Products', function(err, res){
// 	    for (var i = 0; i < res.length; i++){
// 	    	array.push(res[i].ProductName);
// 	    }
// 	    console.log(array);
// });
queryCall();
console.log()

// Call promptCustomers
// promptCustomer();
