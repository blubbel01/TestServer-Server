const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("position", (player, fullText, ...args) => {
    const {x, y, z} = player.position;
    player.sendChatMessage(`Position: ${x} ${y} ${z}`);
});
