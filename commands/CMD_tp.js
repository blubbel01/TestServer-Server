const {MyAPI} = require("../untils/MyAPI");

MyAPI.registerCommand("tp", (player, fullText, ...args) => {
    if (args.length === 1) {
        mp.players.forEach(player => {
            if (player.name == args[0]) {
                targetPlayer = player;
            }
        });
        let targetPlayer;
        player.position = targetPlayer.position;
        const isSMode = player.getVariable('smode');
        if (isSMode) {
            if (targetPlayer.dimension === 0) {
                player.dimension = -1;
            } else {
                player.dimension = Math.abs(targetPlayer.dimension) * -1;
            }
            player.notify("~r~Du bist unsichtbar!");
        } else {
            player.dimension = targetPlayer.dimension;
        }
    } else if (args.length === 2) {
        mp.players.forEach(player => {
            if (player.name == args[0]) {
                playerA = player;
            }
            if (player.name == args[1]) {
                playerB = player;
            }
        });
        let playerA;
        let playerB;

        playerA.position = playerB.position;
        player.sendChatMessage(`Du hast ${playerA.name} zu ${playerB.name} teleportiert`);
        playerA.outputChatBox(`Du wurdest von ${player.name} zu ${playerB.name} teleportiert`);
    } else if (args.length === 3) {
        player.position = new mp.Vector3(Number(args[0]),Number(args[1]),Number(args[2]));
    }
});
