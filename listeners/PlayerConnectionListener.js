const {activePlayers} = require("../shops/clothshop");
const {globalSModePlayerIds} = require("../index");

mp.events.add("playerJoin", (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    mp.players.broadcast(`Spieler ${player.name} ist dem Server beigetreten!`);
});

mp.events.add("playerQuit", (player, exitType, reason) => {
    mp.players.broadcast(`Spieler ${player.name} hat den Server verlassen!`);
    if (activePlayers[player.id])
        delete activePlayers[player.id];
    if (globalSModePlayerIds[player.id])
        delete globalSModePlayerIds[player.id];
});

mp.events.add("playerChat", (player, text) => {
    mp.players.broadcast(`${player.name}: ${text}`);
});
