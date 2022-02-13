const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("respawn", (player) => {
    player.spawn(player.position);
    player.armour = 100;
    player.health = 100;
});
