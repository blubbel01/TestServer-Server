const {playerCreateVehicle} = require("../untils/DataHandler");
mp.events.add("playerDeath", (player, reason, killer) => {
    if (killer) {
        mp.players.broadcast(`${player.name} wurde von ${killer.name} erledigt!`);
    } else {
        mp.players.broadcast(`${player.name} ist gestorben!`);
    }

    setTimeout(() => {
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.dimension = 0;
        player.armour = 100;
        player.health = 100;
    }, 500);
});
