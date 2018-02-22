---
layout: post
title: Setting up Apache on Mac to run php scripts
---

![Apache PHP]({{ site.baseurl }}/images/apache-mac-php/one.jpg "Apache Mac PHP")

#### DISCLAIMER: This article works for OS X High Sierra

## Introduction
When running apache and php on mac, most beginners simply start off with using [MAMP](http://www.mamp.info/en/index.html). However, I feel this produces a barrier in learning process and hence decided to set up the development environment myself.

## Details
Mac comes with preinstalled Apache webserver and php interpreter. All one needs to do is properly configure them. Enabling apache webserver on mac is as easy as :
```zsh
sudo apachectl start
```
This enables apache webserver and files located in `/Library/WebServer/Documents` would show up once you type `localhost` in the browser.

## Configuring virtual hosts
Keeping files away some place like `/Library/WebServer/Documents` doesn't make for a very good choice. But we can tweak apache settings to set up new virtual hosts who look for files in the location we specify. We can also change location for original localhost settings, but it's better to set up separate virtual hosts.

First locate the config files and make a backup :
```zsh
cd /etc/apache2/
cp httpd.conf httpd.conf.bak
```
Next, we edit conf file (replace code with your favourite code editor) :
```zsh
code httpd.conf
```
Find and uncomment the following line :
```zsh
Include /private/etc/apache2/extra/httpd-vhosts.conf
```
As it reads, it will enable loading of extra/httpd-vhosts.conf file. All we now have to do is edit the httpd-vhosts.conf file. Originally it would look something like :
```xml
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "/usr/docs/dummy-host.example.com"
    ServerName dummy-host.example.com
    ServerAlias www.dummy-host.example.com
    ErrorLog "/private/var/log/apache2/dummy-host.example.com-error_log"
    CustomLog "/private/var/log/apache2/dummy-host.example.com-access_log" common
</VirtualHost>
```

For my own setup, I appended the following lines :
```xml
<VirtualHost *:80>
        DocumentRoot "/Users/shivamtripathi/Sites/"
        ServerName shivamtripathi.local
        ErrorLog "/private/var/log/apache2/shivamtripathi.local-error_log"
        CustomLog "/private/var/log/apache2/shivamtripathi.local-access_log" common

        <Directory "/Users/shivamtripathi/Sites">
                AllowOverride All
                Order allow,deny
                Allow from all
                Require all granted
        </Directory>
</VirtualHost>
```
Now things you would need to replace here are :
* Your username
* The location of directory where you wish this virtual host to look for files. I have set `~/Sites` as my location, some people select `~/Document/` for the same.
* Set up ServerName - this would serve as the new host (the name you'll punch in the browser) which will be the entry location for all files.

Next, we need to add the NameServer to the _hosts_ file:
```zsh
echo "127.0.0.1 shivamtripathi.local" >> /etc/hosts
```
Restart apache server and set up a html file :
```zsh
apachectl restart
cd ~/Sites
echo "<h1> Hello, World! </h1>" >> hello.html
```
And we're good to go. Open the browser and type the ServerName you set up followed by `/hello.html`, for example :
```chrome
http://shivamtripathi.local/hello.html
```
![Apache PHP]({{ site.baseurl }}/images/apache-mac-php/two.jpeg "Apache Mac PHP")

## Configuring apache
Run :
```zsh
cd /etc/apache2/
code httpd.conf
```

Find and replace the following :
```zsh
LoadModule php5_module libexec/apache2/libphp7.so
```

Restart Apache and make a new php file :
```zsh
apachectl restart
echo '<?php echo "<h1> Wassup? </h1>" ?>' >> wassup.php
```
Open your browser and type :
```chrome
http://shivamtripathi.local/wassup.php
```

![Apache PHP]({{ site.baseurl }}/images/apache-mac-php/three.jpeg "Apache Mac PHP")

A common practice I follow is to set up separate folders for each project and include a `index.php` or `index.html` file in them; following which I could easily access my projects by typing `http://shivamtripathi.local/my-project/`.

Cheers!