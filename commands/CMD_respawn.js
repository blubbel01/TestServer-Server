const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("respawn", (player) => {
    player.spawn(player.position);
});
