const {MyAPI} = require("../untils/MyAPI");
const {globalSModePlayerIds} = require("../index");

MyAPI.registerCommand("smode", (player) => {
    if (globalSModePlayerIds[player.id]) {
        delete globalSModePlayerIds[player.id];
        if (player.dimension === 0) {
            player.dimension = -1;
        } else {
            player.dimension = Math.abs(player.dimension) * -1;
        }
        player.sendChatMessage("SMode aktiviert!");
    } else {
        globalSModePlayerIds[player.id] = true;
        if (player.dimension === -1) {
            player.dimension = 0;
        } else {
            player.dimension = Math.abs(player.dimension);
        }
        player.sendChatMessage("SMode deaktiviert!");
    }
});
