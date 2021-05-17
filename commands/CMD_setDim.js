const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("dim", (player, fullText, dim) => {
    if (!dim) {
        player.sendChatMessage("Dimension: " + player.dimension);
    } else {
        player.dimension = parseInt(dim);
        player.sendChatMessage("Neue Dimension: " + player.dimension);
    }
});
