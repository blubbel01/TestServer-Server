const {MyPlayer} = require("./MyPlayer");
module.exports = {};
module.exports["MyAPI"] = class MyAPI {

    /**
     * registers client event
     * @param {string} eventName
     * @param {function} callback
     */
    static registerClientEvent(eventName, callback) {
        mp.events.add(eventName, (player, ...args) => {
            const myPlayer = new MyPlayer(player);
            callback(myPlayer, ...args);
        });
    }

    /**
     * registers client procedure
     * @param {string} eventProcName
     * @param {function} callback
     */
    static registerClientProc(eventProcName, callback) {
        mp.events.addProc(eventProcName, (player, ...args) => {
            const myPlayer = new MyPlayer(player);
            callback(myPlayer, ...args);
        });
    }

    /**
     * registers command
     * @param {string} commandName
     * @param {function} callback
     */
    static registerCommand(commandName, callback) {
        mp.events.addCommand(commandName, (player, ...args) => {
            const myPlayer = new MyPlayer(player);
            callback(myPlayer, ...args);
        });
    }
}
