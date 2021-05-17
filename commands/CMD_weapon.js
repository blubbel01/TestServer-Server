const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("weapon", (player, fullText, weaponName) => {
    player.sendChatMessage("Give Weapon: " + mp.joaat(weaponName));
    player.mpPlayer.giveWeapon(mp.joaat(weaponName), 1000);
});
