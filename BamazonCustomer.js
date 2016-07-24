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


// prompt customer to see what items they want to purchase 
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
                if(chosenNumber < queryItems.length){
                    for(i = 0; i < queryItems.length; i++){
                    // console.log(queryItems[i]);
                    if(i == chosenNumber){
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
                                var arrayLocate = chosenNumber-1;
                                // grab product name 
                                var name = queryItems[arrayLocate].ProductName;
                                // grab stock amount
                                var stock = res[0].StockQuantity;
                                // subtract requested amount from stock quantity
                                stock = stock - number;
                                // if statement.  If stock is still greater than 0 update database and display console.log that purchase was succesful
                                if(stock > 0){
                                    console.log("Successful Purchase! You have purchased "+ number + " " + name);
                                    // update the datebase 
                                    connection.query("UPDATE Products SET StockQuantity = "+stock +" WHERE ItemID ="+chosenNumber, function(err, res){  
                                    })
                                    queryCall();
                                }else{
                                    console.log("Not enough stock of "+ name + " exists.  please try again");
                                    queryCall();
                                }
                            });
                          })

                        }// close if statment 
                        
                    }// close for loop  
                }else{
                    console.log("You did not choose a value that is accurate.  Try again");
                    console.log("")
                    console.log("========================================================")
                    queryCall();
                }
                
                                  		
                    });// close then statement 
}// close promptCustomer

// display table of items
var queryCall = function(){
	connection.query('SELECT ItemID,ProductName,Price FROM Products', function(err, res){
        console.log("Welcome to Bamazon Below are the items for sale!");
        console.log("");
        console.log("=================================================");
        // display tables 
        console.table(res);
        for(var i = 0; i < res.length; i++){
    	   queryItems.push(res[i]);
        }
         return res;
	   });
    // call the prompt item 
    promptCustomer();
};
// Launch query table 
queryCall();


