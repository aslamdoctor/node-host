Step 1: Run Terminal / Command prompt as Administrator

Step 2: Enter command below to install all dependancies:
> npm install

Step 3: Edit file app.js and make sure that "vhosts_path" is relevant to your system. And also check the paths in "vhosts_code" variable and modify it as per your needs.

Once the above steps are done. You can run below command to add VHost to Your Apache server and Hostname to Your System.

> node app.js mywebsite

Here "mywebsite" is the name of your project's folder.

It assumes that "mywebsite" folder exists in your server's root folder i.e. htdocs and adds Virtual hosts entry in Apache's VHosts file.
It also adds a Hostname in your OS. So if it's Mac or Linux, its /etc/hosts and if its windows, it will be C:\Windows\System32\drivers\etc\hosts
The hostname it uses is like this
e.g. 
mywebsite ==> mywebsite.local
myproject ==> myproject.local

Once the script runs successfully, make sure you restart your apache web server.

