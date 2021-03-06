const {playerCreateVehicle} = require("../untils/DataHandler");
mp.events.add("playerJoin", async (player) => {
    player.armour = 100;
    player.health = 100;

    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    player.dimension = 0;
    mp.players.broadcast(`Spieler ${player.name} ist dem Server beigetreten!`);
});

mp.events.add("playerQuit", (player, exitType, reason) => {
    mp.players.broadcast(`Spieler ${player.name} hat den Server verlassen!`);

    if (playerCreateVehicle.has(player.name)) {
        playerCreateVehicle.get(player.name).forEach(veh => {
            veh.destroy();
        });
    }
});

mp.events.add("playerChat", (player, text) => {
    mp.players.broadcast(`${player.name}: ${text}`);
});
