const mysql = require('mysql');

var host = "localhost";
var user = "root";
var password = "";
var dbname = process.argv[2];

if(dbname !== undefined){
	var connection = mysql.createConnection({
		host: host,
		user: user,
		password: password
  	});
	
	  // Connect to db
	connection.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

		// Create db
		connection.query("CREATE DATABASE IF NOT EXISTS " + dbname, function (err, result) {
			if (err) throw err;
			console.log("Database created");
			
			// Import db
			const cp = require('child_process');

			cp.exec('mysql -u' + user + ' -p ' + password + ' ' + dbname + ' < database.sql', (error, stdout, stderr) => {
				if (error) throw error;
				console.log("Database imported");
			});

		});



		// Close connection
		connection.end(function(err) {
			console.log("Connection closed!");
		});
	});  
}
else{
	console.log('Please provide your database name as argument');
}
