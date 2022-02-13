const {MyAPI} = require("../untils/MyAPI");
const {playerCreateVehicle} = require('../untils/DataHandler');

MyAPI.registerCommand("veh", (player, fulltext, vehicleName) => {
    const vehicle = mp.vehicles.new(mp.joaat(vehicleName), player.position,
        {
            numberPlate: player.name,
            color: [[255, 255, 255],[255, 255, 255]]
        });
    vehicle.setMod(11, 3);
    vehicle.setMod(12, 2);
    vehicle.setMod(13, 2);
    vehicle.setMod(15, 3);
    vehicle.setMod(16, 4);
    vehicle.setMod(18, 0);
    vehicle.setMod(22, 0);
    vehicle.setMod(40, 3);
    vehicle.setMod(46, 2);
    vehicle.setMod(53, 5);

    if (!playerCreateVehicle.has(player.name)) {
        playerCreateVehicle.set(player.name, []);
    }
    playerCreateVehicle.get(player.name).push(vehicle);

    player.notify("~g~Fahrzeug erstellt!");
});
