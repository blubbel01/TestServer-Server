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
require("./commands/CMD_respawn");
require("./commands/CMD_tp");
require("./commands/CMD_smode");
require("./commands/CMD_vehicle");
require("./commands/CMD_setDim");
require("./commands/CMD_time");
require("./commands/CMD_weather");

// load Listeners
require("./listeners/PlayerConnectionListener");
require("./listeners/PlayerDeathListener");

