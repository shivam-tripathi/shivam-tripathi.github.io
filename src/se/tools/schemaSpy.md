# SchemaSpy

### Introduction

![Schema Spy Demo 2](/images/tech/sp:one.jpg)

When beginning contribution to any open source project utilising relational databases, one of the biggest hassle almost always is to clearly understand the database schema. Again, while developing any project, it would help make a new developer's experience extremely smooth if the database schema is well documented and visualized.

Recently, I came across this extremely slick tool called SchemaSpy, which makes it extremely easy to understand the schema by utilising simple visualisations to represent relationships and orphan tables. On top of it, it also provides detailed description of all the tables and columns in the schema. For example:

![Schema Spy Demo 1](/images/tech/sp:two.jpg)
![Schema Spy Demo 2](/images/tech/sp:three.jpg)

Cool, isn't it? 😍

### Installation
I am using Postgres on Mac, but SchemaSpy can work on many other OS and all databases with jdbc drivers. First we need to resolve depencies, namely graphviz. Using brew, the following works on Mac High Sierra :

First run :

```sh
brew uninstall graphviz
```

After that run (source) :
```sh
brew install graphviz --with-librsvg --with-pango
```

After this, we simply need to download SchemaSpy jar file and relevant jdbc driver (in this case of postgres). Once everything is in place, run the following command:
```sh
java -jar path/to/schemaspy.jar -t [db type] -s public -db [db name] -u [username]
     -host localhost -port=5432 -o path/to/target/folder -dp /path/to/jdbcdriver.jar
```

Replace [db type] with relevant database argument, for example postgres will use pgsql. Change the port number if required. The remaining are self-explanatory.

### Running
And we are good to go! Navigate to target folder and double click index.html 😄

