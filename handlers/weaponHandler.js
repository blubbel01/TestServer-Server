class WeaponHandler {

    static init() {
        WeaponHandler.setWeaponData();
        WeaponHandler.multiplier = {
            20: 1.3, // Kopf
            19: 1, // Hals
            18: 0.5, // Hand (re.)
            17: 0.6, // Unterarm (re.)
            16: 0.8, // Oberarm (re.)
            15: 0.8, // Schulter (re.)
            14: 0.5, // Hand (li.)
            13: 0.6, // Unterarm (li.)
            12:  0.8, // Oberarm (li.)
            11: 0.8, // Schulter (li.)
            10: 0.9, // Oberer Oberkörper
            9: 0.8, // Mittlerer Oberkörper
            8: 0.8, // Unterer Oberkörper
            7: 0.8, // Becken
            6: 0.3, // Fuß (re.)
            5: 0.5, // Unterschenkel (re.)
            4: 0.6, // Oberschenkel (re.)
            3: 0.3, // Fuß (li.)
            2: 0.5, // Unterschenkel (li.)
            1: 0.6, // Oberschenkel (li.)
            0: 0.7, // Hintern
        };

        mp.events.add("playerShotPlayer", WeaponHandler.playerShotPlayer);
    }

    static setWeaponData() {

        WeaponHandler.weaponData = new Map();
        WeaponHandler.weaponData.set(0xC1B3C3D1, { // weapon_revolver
            damageBase: 108,
            range: 200,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xCB96392F, { // weapon_revolver_mk2
            damageBase: 100,
            range: 200,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x97EA20B8, { // weapon_doubleaction
            damageBase: 75,
            range: 200,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x99AEEB3B, { // weapon_pistol50
            damageBase: 51,
            range: 200,
            shotgun: false,
        });

        WeaponHandler.weaponData.set(0x2BE6766B, { // weapon_smg
            damageBase: 18,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x0A3D4D34, { // weapon_combatpdw
            damageBase: 21,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xDB1AA450, { // weapon_machinepistol
            damageBase: 24,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xEFE7E2DF, { // weapon_assaultsmg
            damageBase: 20,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x13532244, { // weapon_microsmg
            damageBase: 18,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x1D073A89, { // weapon_pumpshotgun
            damageBase: 19,
            range: 150,
            shotgun: true,
        });

        WeaponHandler.weaponData.set(0xBFEFFF6D, { // weapon_assaultrifle
            damageBase: 38,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x84D6FAFD, { // weapon_bullpuprifle_mk2
            damageBase: 33,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x83BF0278, { // weapon_carbinerifle
            damageBase: 25,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xFAD1F1C9, { // weapon_carbinerifle_mk2
            damageBase: 25,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xAF113F99, { // weapon_advancedrifle
            damageBase: 30,
            range: 150,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x624FE830, { // weapon_compactrifle
            damageBase: 40,
            range: 150,
            shotgun: false,
        });

        WeaponHandler.weaponData.set(0xDBBD7280, { // weapon_combatmg_mk2
            damageBase: 30,
            range: 100,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0x61012683, { // weapon_gusenberg
            damageBase: 24,
            range: 150,
            shotgun: false,
        });

        WeaponHandler.weaponData.set(0x05FC3C11, { // weapon_sniperrifle
            damageBase: 308,
            range: 2000,
            shotgun: false,
        });

        WeaponHandler.weaponData.set(0xDC4DB296, { // weapon_marksmanpistol
            damageBase: 220,
            range: 500,
            shotgun: false,
        });
        WeaponHandler.weaponData.set(0xA89CB99E, { // weapon_musket
            damageBase: 65,
            range: 500,
            shotgun: false,
        });
    }

    /**
     *
     * @param {PlayerMp} sourcePlayer
     * @param {string} targetPlayerName
     * @param {any} weaponHash
     * @param {number} hitBone
     */
    static playerShotPlayer(sourcePlayer, targetPlayerName, weaponHash, hitBone) {
        weaponHash = Number(weaponHash);
        const multiplier = WeaponHandler.multiplier[hitBone];
        const weaponBaseDamage = WeaponHandler.weaponData.has(weaponHash) ? WeaponHandler.weaponData.get(weaponHash).damageBase : 0;

        let targetPlayer;
        mp.players.forEach((player) => {
            if (player.name === targetPlayerName) {
                targetPlayer = player;
            }
        });

        if (targetPlayer) {
            let dmg = Math.floor(weaponBaseDamage / 2 * multiplier);
            if (targetPlayer.armour > 0) {
                if (dmg > targetPlayer.armour) {
                    targetPlayer.armour = 0;
                    dmg -= targetPlayer.armour;
                } else {
                    targetPlayer.armour -= dmg;
                    dmg = 0;
                }
            }
            targetPlayer.health -= dmg;
            sourcePlayer.outputChatBox(`Damage Bone: ${hitBone} DMG: ${Math.floor(weaponBaseDamage / 2 * multiplier)} Taget: ${targetPlayer.name}`);
        }
    }

}
WeaponHandler.init();
