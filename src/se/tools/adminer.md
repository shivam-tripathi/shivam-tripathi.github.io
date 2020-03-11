# Adminer
A lightweight database management tool

## Introduction

I have had regular stints dealing with traditional relational databases with complex schemas, though most of analytics work I have done has been while using BigQuery. But one of the tools that makes life so much easier when running regular SQL operations is Adminer. Unlike it's probably more popular counterpart, phpMyAdmin - Adminer is a multi database management software in a single php file. Yes, a single php file - with size just around 300KB. And it's super easy to view tables, relations as well as write SQL queries directly. It's query editor isn't exactly a modern text editor - nor does it have an intelligent auto complete - but it gets the job done very efficiently.


![Adminer welcome screen](/images/tech/adminer:1.png)

## Setting up
It's almost zero set up process. Head over to `https://www.adminer.org` and in the Downloads click on the variant you want. Using English only version cuts down file size even more. Rename it to `index.php`.

Next, we need to run a server. In mac, apache and php come preinstalled. If you have already have set up your Apache to run with php and set up virtual hosts to look up files in `~/Sites` folder or any other folder, you can simply copy paste the downloaded file into that folder. Just start your apache server incase it's not already running by typing `sudo apachectl start` in your terminal.

If you haven't done that, don't worry - it's still a zero set up process. Fire up your terminal and navigate to the location of the downloaded script.
Now all you need to do is simply run `php -S localhost:8000` - and you're all set.

**Please keep in mind that this php simple web server has been designed to aid application development. It is not intended to be a full-featured web server. It should not be used on a public network. If you really want to do that, you can set up Apache to work with php, along with nginx.**

Now just open up your browser and navigate to `localhost:8000` to see something like this:
<br/><br/><br/>
![Adminer welcome screen](/images/tech/adminer:2.png)

Select database types, enter in your credentials and you're all set. You'll see something like this:
<br/><br/><br/>
![Adminer welcome screen](/images/tech/adminer:3.png)

## Beautifying Adminer
Regular Adminer interface is very bland for my taste. Fortunately, Adminer provides ability to customize the interface or just pull in one of the alternative designs.
Head over to `adminer.org` again, and this time navigate to `Alternative designs` section. There are multiple other designs as well which have not been listed on the page - a simple google search would readily list them. Just download the css file, name it `adminer.css`, place it next to our origin php file
and bingo - Adminer is as beautiful as it is useful!
<br/>

![Adminer welcome screen](/images/tech/adminer:4.png)
