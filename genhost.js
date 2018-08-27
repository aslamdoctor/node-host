const fs = require('fs');
const hostile = require('hostile');

var foldername = process.argv[2];

if(foldername !== undefined){
	var hostname = foldername + '.local';

	var vhosts_path = `c:\\xampp\\apache\\conf\\extra\\httpd-vhosts.conf`;
	var vhosts_code = `\n\n<VirtualHost *:80>
	DocumentRoot "E:/sites/${foldername}"
	ServerName ${hostname}
	<Directory "E:/sites/${foldername}">
	Options Indexes FollowSymLinks ExecCGI Includes
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>`;

	// Add Host to Apache VHosts
	fs.appendFile(vhosts_path, vhosts_code, function (err) {
	  if (err) throw err;
	  console.log('Apache Hostname added successfully. \nHostname: ' + hostname + ' \nPlease restart your Apache server.');
	});


	// Add Host to System
	hostile.set('127.0.0.1', hostname, function (err) {
	  if (err) {
		console.error(err)
	  } else {
		console.log('Host added successfully.')
	  }
	});
}
else{
	console.log('Please provide your folder name as argument');
}
