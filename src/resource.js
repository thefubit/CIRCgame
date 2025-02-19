var folder = "";//to allow selective folder directories

if (!cc.sys.isNative)//if not native, meaning it is on the computer/web. then use medRes
{
	folder = "res/mediumRes";
}



/////////////////////LOCAL STORAGE/////////////////
var ls = cc.sys.localStorage;
//access by 
    // var thing = ls.getItem("key");
//set by
    // ls.setItem("key",value);
//retreving high score or setting it to zero if don't have a high score
var highScore = "0";
if(ls.getItem("highscore")!=null){
    highScore = ls.getItem("highscore");//must grab from local storage
} 

//setting what color to display for animated title
var colorselect=0;
while(colorselect == 0){
colorselect = Math.floor((Math.random()*5)-0.01);
}

if(colorselect == 1){
    titlefolder = "animatedgreen/";
    circcolor = "circgreen";
}
else if (colorselect == 2){
    titlefolder = "animatedred/";
    circcolor = "circred";
}
else if (colorselect == 3){
    titlefolder = "animatedteal/";
    circcolor = "circteal";
}
else if (colorselect == 4){
    titlefolder = "animatedyellow/";
    circcolor = "circyellow";
}


//Color of the turbo text
var perfectselect = 0;
var greatselect = 0;
var missselect = 0;
var perfectcolor = "green";
var greatcolor = "yellow";
var misscolor = "red";


//////////////randomization//////////////////////
perfectselect = Math.floor(Math.random()*4);
greatselect = Math.floor(Math.random()*4);
missselect = Math.floor(Math.random()*2);
///////////////////randomization////////////////////

//select perfect text
if(perfectselect == 0 || perfectselect ==1){
    perfectcolor = "green";
}
else if (perfectselect == 2){
    perfectcolor = "teal";
}
else if (perfectselect == 3 ){
    perfectcolor = "pink";
}
else if (perfectselect == 4 ){
    perfectcolor = "yellow";
}

//select great text
if (greatselect == 0 || greatselect == 1){
    greatcolor = "blue";
}
else if (greatselect == 2){
    greatcolor = "orange";
}
else if (greatselect == 3){
    greatcolor = "pink";
}
else if (greatselect == 4){
    greatcolor = "yellow";
}

    //select miss text
if (missselect == 0 || missselect == 1){
    misscolor = "red";
}
else if (missselect == 2){
    misscolor = "purple";
}
//randomize text color

//list out all the resources that the game needs
//REMEMBER THE COMMAS!!!!!!!!!!!
var res = {

	//Background image
    Background_png : "res/background/fitallbgreduced.png",

    //TTRCLogo_png : "res/background/TTRCLogo.png",
    TTRCGamesLogo_png : "res/background/fitallttrcgamesreduced.png",

    //Music
    MusicSymbol_png : "res/symbols/musicsymbol.png",
    Background_music : "res/sound/normalbg.wav",
    TurboBackground_music :"res/sound/turbobg.wav",
    //Sound
    SoundSymbol_png : "res/symbols/sfxsymbol.png",
    NormalPerfectSound : "res/sound/normalperfect.wav",//note sonic ring sound ideal, but needs to be cut shorter
    NormalGreatSound : "res/sound/normalgreat.wav",
    NormalMissSound : "res/sound/normalmiss.wav",
    GameOverSound : "res/sound/gameover.wav",

    TurboPerfectSound : "res/sound/turboperfect.wav",
    TurboGreatSound : "res/sound/turbogreat.wav",
    TurboMissSound : "res/sound/turbomiss.wav",


    //Button images -settings/mainmenu/mail/resume/ -for pressing
    HomeButton_png : "res/buttons/home.png",
    HomeButtonPressed_png : "res/buttons/homeselected.png",

    SettingsButton_png : "res/buttons/settings.png",
    SettingsButtonPressed_png : "res/buttons/settingsselected.png",

    MailButton_png : "res/buttons/mail.png",
    MailButtonPressed_png : "res/buttons/mailselected.png",

    PauseButton_png : "res/buttons/pause.png",
    PauseButtonPressed_png : "res/buttons/pauseselected.png",

    PlayButton_png : "res/buttons/play.png",
    PlayButtonPressed_png : "res/buttons/playselected.png",

    CreditsButton_png: "res/buttons/credits.png",
    CreditsButtonPressed_png: "res/buttons/creditsselected.png",

    //symbols
    HighScoreSymbol_png : "res/symbols/highscore.png",
    YourScoreSymbol_png : "res/symbols/score.png",

    //game items/sprites
    InnerSatellite_png : "res/rectsmall.png",
    OuterSatellite_png : "res/rectsmall.png",

    //checkboxes, both selected and unselected
    Checked_png : "res/checkboxes/Checked.png",
    CheckedDisabled_png : "res/checkboxes/CheckedDisabled.png",
    CheckedSelected_png : "res/checkboxes/CheckedSelected.png",
    Unchecked_png : "res/checkboxes/Unchecked.png",
    UncheckedDisabled_png : "res/checkboxes/UncheckedDisabled.png",
    UncheckedSelected_png : "res/checkboxes/UncheckedSelected.png",

    //Title
    GameTitle_png : "res/placeholdertitle.png",//non animated
    
    //animated title
    animatedTitle_plist: "res/animated/"+titlefolder+"sprites.plist",
    animatedTitle_png : "res/animated/" + titlefolder+"sprites.png",
    
    // Particles
    innertrailingParticle_plist: "res/particles/innerTrail.plist",
    outertrailingParticle_plist: "res/particles/outerTrail.plist",
    explosionParticle_plist: "res/particles/explosion.plist",
    Stars_plist:"res/particles/Stars.plist",



    //Word labels
    PerfectText : "res/words/perfect" + perfectcolor+".png",
    GreatText : "res/words/great"+greatcolor + ".png",
    MissText : "res/words/miss"+misscolor +".png",
    
    animatedTurboModeText_plist : "res/words/animatedTurboText/sprites.plist",
    animatedTurboModeText_png : "res/words/animatedTurboText/sprites.png",


    //font files
    Ethnocentric_BMFont : "res/bmfonts/EthnocentricBM.fnt",
    Junegull_BMFont : "res/bmfonts/JunegullBM.fnt",

};

//adding the resources
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
};





