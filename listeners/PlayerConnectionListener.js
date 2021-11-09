const {activePlayers} = require("../shops/clothshop");
// const {database} = require("../database/index");

mp.events.add("playerJoin", async (player) => {

    /*
    const whiteListEntry = await database.models.whitelist.findOne({
        where: {
            socialClubName: player.socialClub,
        },
    });

    if (!whiteListEntry) {
        console.log(`NO_WHITELIST: ${player.socialClub} - ${player.name}`);
        return player.kick("You are not whitelisted on this Server!");
    }
    player.name = whiteListEntry.nickname;
     */
    player.armour = 200;
    player.health = 200;

    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    player.dimension = 0;
    mp.players.broadcast(`Spieler ${player.name} ist dem Server beigetreten!`);
});

mp.events.add("playerQuit", (player, exitType, reason) => {
    mp.players.broadcast(`Spieler ${player.name} hat den Server verlassen!`);

    if (activePlayers[player.id])
        delete activePlayers[player.id];
});

mp.events.add("playerChat", (player, text) => {
    mp.players.broadcast(`${player.name}: ${text}`);
});
