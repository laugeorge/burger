# [Burger Joy](https://burger-joy.herokuapp.com/index)

## Preview

![App Preview](https://github.com/laugeorge/burger/tree/master/public/assets/img/snapshot.jpg)

## Intro and Instruction
A burger logging app that let user type in their favorite burger. When the user submits a burger's name, the app will display the burger on the left side of the page as well as generating a devour button. When user clicks the devour button, the burger will be move to the right.  


## Technologies
* HTML / CSS
* JavaScript
* MySQL
* Node
* Express
* Handlebars

#### Directory structure

The files and directories are in the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
