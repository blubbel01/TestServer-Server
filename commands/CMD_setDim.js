const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("setdim", (player, fullText, dimId) => {
    player.dimension = parseInt(dimId);
    player.sendChatMessage("Neue Dimension: " + player.dimension);
});
