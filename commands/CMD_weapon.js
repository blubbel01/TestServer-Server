const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("weapon", (player, fullText, weaponName) => {
    if (!weaponName) {
        return player.sendChatMessage("/weapon [weaponName]");
    }
    player.sendChatMessage("Give Weapon: " + mp.joaat(weaponName));
    player.mpPlayer.giveWeapon(mp.joaat(weaponName), 1000);
});
