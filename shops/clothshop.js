const {MyAPI} = require("../untils/MyAPI");
const {database} = require("../database/index");
const {Op} = require("sequelize");

const activePlayers = {};

MyAPI.registerClientEvent("clothshop:setValidation", async (player, drawableTorso, drawableUndershirt, drawableTop, validState) => {
    const isMale = await player.callProc("isMale");
    const gender = isMale ? "male" : "female";

    const dbEntry = await database.models.valid_combinations.findOne({
        where: {
            gender,
            drawableTorso,
            drawableUndershirt,
            drawableTop,
        },
    });

    if (!dbEntry) {
        return;
    }

    const activityEntry = await database.models.whitelist.findOne({
        where: {
            socialClubName: player.mpPlayer.socialClub,
        }
    });

    if (!activityEntry) {
        console.log(`NO_WHITELIST: ${player.mpPlayer.socialClub} - ${player.mpPlayer.name}`);
        return player.mpPlayer.kick("You are not whitelisted on this Server!");
    }

    activityEntry.activity = activityEntry.activity + 1;
    await activityEntry.save();

    if (validState === true) {
        dbEntry.valid = true;
        await dbEntry.save();
    } else {
        dbEntry.valid = false;
        await dbEntry.save();
    }

    setTimeout(async () => {
        switch (validState) {
            case true:
                dbEntry.valid = true;
                await dbEntry.save();
                break;
            case "fTorso":
                await database.models.valid_combinations.update({
                    valid: false
                }, {
                    where: {
                        gender,
                        drawableTorso,
                        drawableTop,
                    }
                });
                break;
            case "fUndershirt":
                await database.models.valid_combinations.update({
                    valid: false
                }, {
                    where: {
                        gender,
                        drawableUndershirt,
                        drawableTop,
                    }
                });
                break;
            case "fTop":
                await database.models.valid_combinations.update({
                    valid: false
                }, {
                    where: {
                        gender,
                        drawableTop,
                    }
                });
                break;
            case false:
                await database.models.valid_combinations.update({
                    valid: false
                }, {
                    where: {
                        gender,
                        [Op.or]: [
                            {drawableUndershirt},
                            {drawableTorso}
                        ],
                        drawableTop,
                    }
                });
                break;
        }

        player.notify("Gespeichert");
    }, 10);

    const orStatementExclusion = Object.values(activePlayers).map(data => {
        return {
            [Op.and]: [
                {drawableTorso: data.drawableTorso},
                {drawableUndershirt: data.drawableUndershirt},
                {drawableTop: data.drawableTop},
            ]
        };
    });

    const dbDataEntry = await database.models.valid_combinations.findOne({
        where: {
            gender,
            valid: null,
            [Op.not]: [
                {
                    [Op.or]: orStatementExclusion,
                }
            ]
        }
    });

    if (!dbDataEntry) {
        player.sendChatMessage("Fertig!");
        player.call("clothshop:close");
        delete activePlayers[player.mpPlayer.id];
    } else {
        const {drawableTop, drawableTorso, drawableUndershirt} = dbDataEntry;

        player.call("clothshop:selectItem", drawableTop, drawableTorso, drawableUndershirt, 1, 0);
        activePlayers[player.mpPlayer.id] = {gender, drawableTorso, drawableUndershirt, drawableTop};
    }
});

MyAPI.registerClientEvent("clothshop:close", (player) => {
    delete activePlayers[player.mpPlayer.id];
    player.call("clothshop:close");
});

MyAPI.registerCommand("clothshop", async (player) => {
    const isMale = await player.callProc("isMale");
    const gender = isMale ? "male" : "female";

    const orStatementExclusion = Object.values(activePlayers).map(data => {
        return {
            [Op.and]: [
                {drawableTorso: data.drawableTorso},
                {drawableUndershirt: data.drawableUndershirt},
                {drawableTop: data.drawableTop},
            ]
        };
    });

    const dbDataEntry = await database.models.valid_combinations.findOne({
        where: {
            gender,
            valid: null,
            [Op.not]: [
                {
                    [Op.or]: orStatementExclusion,
                }
            ]
        }
    });

    if (!dbDataEntry) {
        player.sendChatMessage("Keine unerledigten Kombinationen gefunden!");
        return;
    }

    const {drawableTop, drawableTorso, drawableUndershirt} = dbDataEntry;
    player.call("clothshop:selectItem", drawableTop, drawableTorso, drawableUndershirt, 1, 0);
    activePlayers[player.mpPlayer.id] = {gender, drawableTorso, drawableUndershirt, drawableTop};
});

module.exports = {
    activePlayers
};
