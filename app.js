const fs = require('fs');
const hostile = require('hostile');

var foldername = 'test';
var hostname = foldername + '.local';

var vhosts_path = `c:\\xampp\\apache\\conf\\extra\\httpd-vhosts.conf`;
var vhosts_code = `\n\n<VirtualHost *:80>
    DocumentRoot "C:/xampp/htdocs/${foldername}"
    ServerName myproject.dev
    <Directory "C:/xampp/htdocs/${foldername}">
	Options Indexes FollowSymLinks ExecCGI Includes
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>`;


// Add Host to Apache VHosts
fs.appendFile(vhosts_path, vhosts_code, function (err) {
  if (err) throw err;
  console.log('Apache VHost added successfully.');
});


// Add Host to System
hostile.set('127.0.0.1', hostname, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('Host added successfully.')
  }
});