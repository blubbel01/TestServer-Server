const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("time", (player, fullText, hours, minutes) => {
    if (!hours || !minutes) {
        return player.sendChatMessage("/time [hours] [minutes]");
    }
    mp.world.time.set(hours, minutes, 0);
});
