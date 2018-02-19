---
layout: post
title: Visualising complex database schemas using Schema Spy
---

![Schema Spy]({{ site.baseurl }}/images/sp/one.jpg "Schema Spy")

## Introduction

When beginning contribution to any open source project utilising databases, one of the biggest hassle almost always is to clearly understand the database schema. Again, while developing any project, it would help make a new developer's experience extremely smooth if the database schema is well documented and visualized.

Recently, I came across this extremely slick tool called SchemaSpy, which makes it extremely easy to understand the schema by utilising simple visualisations to represent relationships and orphan tables. On top of it, it also provides detailed description of all the tables and columns in the schema. For example:

![Schema Spy Demo 1]({{ site.baseurl }}/images/sp/two.jpg)
![Schema Spy Demo 2]({{ site.baseurl}}/images/sp/three.jpg)

Cool, isn't it? :heart_eyes:

## Installation

I am using Postgres on Mac, but SchemaSpy can work on many other OS and all databases with jdbc drivers. First we need to resolve depencies, namely graphviz. Using brew, the following works on Mac High Sierra :

First run :
```zsh
brew uninstall graphviz
```
After that run [(source)](https://github.com/schemaspy/schemaspy/issues/33/#issuecomment-355091538) :
```zsh
brew install graphviz --with-librsvg --with-pango
```

After this, we simply need to download SchemaSpy [jar](https://github.com/schemaspy/schemaspy) file and relevant jdbc driver (in this case of [postgres](http://jdbc.postgresql.org/download.html)). Once everything is in place, run the following command:

```zsh
java -jar path/to/schemaspy.jar -t [db type] -s public -db [db name] -u [username]
     -host localhost -port=5432 -o path/to/target/folder -dp /path/to/jdbcdriver.jar
```

Replace [db type] with relevant database argument, for example postgres will use pgsql. Change the port number if required. The remaining are self-explanatory.

## Running

And we are good to go! Navigate to target folder and double click index.html :smile: