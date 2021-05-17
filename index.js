'use strict';

require('dotenv').config();

//load database
require('./database/connection.js')();
const database = require('./database').database;


// load scripts
require("./shops/clothshop");

// load Commands
require("./commands/CMD_setGender");
require("./commands/CMD_weapon");
