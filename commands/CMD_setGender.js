const {MyAPI} = require("../untils/MyAPI");

var MotherBlend = 21, FatherBlend = 41, fBlendShape = 0.5, fBlendSkin = 0.5, HairHighlight = 0, HairColour = 0;

var NoseWidth = 0, NoseHeight = 0, NoseLength = 0, NoseBridge = 0, NoseTip = 0, NoseBridgeShift = 0;
var BrowHeight = 0, BrowWidth = 0, CBoneHeight = 0, CBoneWidth = 0, CheekWidth = 0, Eyes = 0, Lips = 0;
var JawWidth = 0, jawHeight = 0, ChinLength = 0, ChinPos = 0, ChinWidth = 0, ChinShape = 0, NeckWidth = 0;

MyAPI.registerCommand("setGender", (player, fullText, gender_string) => {
    const gender = gender_string === "m";

    player.mpPlayer.setCustomization(gender, MotherBlend, FatherBlend, 0, MotherBlend, FatherBlend, 0, fBlendShape, fBlendSkin, 0, 1, HairColour, HairHighlight,
        [
            NoseWidth, NoseHeight, NoseLength, NoseBridge, NoseTip, NoseBridgeShift,
            BrowHeight, BrowWidth, CBoneHeight, CBoneWidth, CheekWidth, Eyes, Lips,
            JawWidth, jawHeight, ChinLength, ChinPos, ChinWidth, ChinShape, NeckWidth
        ]
    );
});
