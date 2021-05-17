module.exports = {};
module.exports["MyPlayer"] = class MyPlayer {

    /**
     * @const
     * @param {PlayerMp} mpPlayer
     */
    constructor(mpPlayer) {
        this.mpPlayer = mpPlayer;
    }

    sendChatMessage(message) {
        this.mpPlayer.outputChatBox(message);
    }

    notify(message) {
        this.call("notify", message);
    }

    call(eventName, ...args) {
        this.mpPlayer.call(eventName, args);
    }

    callProc(eventName, ...args) {
        return this.mpPlayer.callProc(eventName, args);
    }

    /**
     * spawns the player on a Position
     * @param {Vector3Mp} position
     */
    spawn(position) {
        this.mpPlayer.spawn(position);
    }

    /**
     * get position
     * @return {Vector3Mp}
     */
    get position() {
        return this.mpPlayer.position;
    }

    /**
     * teleport a player
     * @param {Vector3Mp} position
     */
    set position(position) {
        this.mpPlayer.position = position;
    }
}
