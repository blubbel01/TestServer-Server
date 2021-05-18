const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("weather", (player, fullText, weatherName) => {
    if (!weatherName) {
        return player.sendChatMessage("/weather [weatherName]");
    }
    /**
     BLIZZARD = "BLIZZARD",
     CLEAR = "CLEAR",
     CLEARING = "CLEARING",
     CLOUDS = "CLOUDS",
     EXTRA_SUNNY = "EXTRASUNNY",
     FOGGY = "FOGGY",
     OVERCAST = "OVERCAST",
     RAIN = "RAIN",
     SMOG = "SMOG",
     SNOW_LIGHT = "SNOWLIGHT",
     THUNDER = "THUNDER",
     XMAS = "XMAS"
     */
    mp.world.weather = weatherName;
    mp.players.broadcast(`${player.name} hat das Wetter zu ${weatherName} geändert.`);
});
