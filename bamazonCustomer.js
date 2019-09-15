var mysql = require('mysql');
var inquirer = require('inquirer')

// mysql -u root -p
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon',
    port: 3306
});

connection.connect(function(error){
    if (error) {
        console.log('error')
    }
    console.log('Connected to Bamazon!')
    displayProducts()
}); 

function displayProducts(){
    connection.query('SELECT * FROM products', function(error,data){
        if (error) {
            console.log('error')
        }
        console.table(data)
        promptUser()
    })
}

function promptUser(){
    inquirer.prompt([
       {
           type: 'input',
           name: 'ID', 
           message: 'What item ID would you like to buy?'
       },
       {
           type: 'input',
           name: 'units', 
           message: 'How many units would you like to buy?'
    }   

    ]).then(function(userSelection){
        console.log(userSelection)
        updateDatabase(userSelection.ID, userSelection.units)
    })
}

function updateDatabase(ID,units){
    connection.query('UPDATE products SET stock_quantity = stock_quantity -? WHERE ID=?',
    [units, ID],
    function(error,data){
        if (error){
            console.log('error')
        }
        console.log('Your purchase was successful!')
        displayProducts()
    })
}