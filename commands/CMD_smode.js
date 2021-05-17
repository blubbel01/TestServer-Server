const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("smode", (player) => {
    const isSMode = player.mpPlayer.getVariable('smode');
    if (isSMode) {
        player.mpPlayer.setVariable('smode', false);
        if (player.dimension === 0) {
            player.dimension = -1;
        } else {
            player.dimension = Math.abs(player.dimension) * -1;
        }
        player.sendChatMessage("SMode aktiviert!");
    } else {
        player.mpPlayer.setVariable('smode', true);
        if (player.dimension === -1) {
            player.dimension = 0;
        } else {
            player.dimension = Math.abs(player.dimension);
        }
        player.sendChatMessage("SMode deaktiviert!");
    }
});
