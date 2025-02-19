//to check whether the layer already exists - prevents duplicates
var CREDITSINITIALIZED = false;

//The main layer of this scene
var CreditsLayer = cc.Layer.extend({
    backgroundPic:null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        //normalizing the size and setting the screen size
        var size = cc.winSize;
        var normalizescale = size.height/640;
        /////////////////////////////
        //background picture
        this.backgroundPic = new cc.Sprite(res.Background_png);
        this.backgroundPic.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.backgroundPic.setScale(0.8*normalizescale);
        this.addChild(this.backgroundPic, 0);

        //////////////BUTTONS///////////////////////
        var MainMenuButton= new cc.MenuItemImage(
            res.HomeButton_png,
            res.HomeButtonPressed_png,
            function () {
                ReturnToMenuFromCredits();
            }, this);
        MainMenuButton.attr({
            x: size.width/2,
            y: size.height/3,
            anchorX: 0.5,
            anchorY: 0.5,
            scale : 0.8*normalizescale,
        });

        var menu = new cc.Menu(MainMenuButton);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);
        //////////////BUTTONS////////////////////////
        /////////////////////////////

        //credits title label
        var CreditsLabel = new cc.LabelBMFont("CREDITS",res.Ethnocentric_BMFont);
        // position the label on the center of the screen
        CreditsLabel.x = size.width / 2;
        CreditsLabel.y = size.height/6*5;
        CreditsLabel.setScale(2*normalizescale);
        CreditsLabel.color = cc.color(100,150,150);
        // add the label as a child to this layer
        this.addChild(CreditsLabel, 5);

        //text stuff to say
        var EmailUs = new cc.LabelBMFont("Email Us At: ttrcgames@outlook.com",res.Junegull_BMFont);
        EmailUs.x = size.width/2;
        EmailUs.y = size.height/3*2;
        EmailUs.setScale(1.2*normalizescale);
        EmailUs.color = cc.color(100,150,150);
        this.addChild(EmailUs);

        //giving knowledge
        var GameMadeBy = new cc.LabelBMFont("Game made with Cocos2d",res.Junegull_BMFont);
        GameMadeBy.x = size.width/2;
        GameMadeBy.y = size.height/10*6;
        GameMadeBy.setScale(0.7*normalizescale);
        GameMadeBy.color = cc.color(100,150,150);
        this.addChild(GameMadeBy);

        var MusicMadeBy = new cc.LabelBMFont("Music made with AUXY",res.Junegull_BMFont);
        MusicMadeBy.x = size.width/2;
        MusicMadeBy.y = GameMadeBy.y-40;
        MusicMadeBy.setScale(0.7*normalizescale);
        MusicMadeBy.color = cc.color(100,150,150);
        this.addChild(MusicMadeBy);

        var SFXMadeBy = new cc.LabelBMFont("SFX made with www.bfxr.net", res.Junegull_BMFont);
        SFXMadeBy.x = size.width/2;
        SFXMadeBy.y = MusicMadeBy.y-40;
        SFXMadeBy.setScale(0.7*normalizescale);
        SFXMadeBy.color = cc.color(100,150,150);
        this.addChild(SFXMadeBy);        

        return true;
    },//ctor function - main code
});//GameLayer

//return to main menu
var ReturnToMenuFromCredits = function(){
   CREDITSINITIALIZED = false;
    cc.director.popScene();
    
};

//////////////////////////////////////////////////
/////////////////////////////////////////////////
var CreditsScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (CREDITSINITIALIZED == false){
            CREDITSINITIALIZED = true;
            var layer = new CreditsLayer();
            this.addChild(layer);
        }//check whether initialized
    }//initiate the scene on enter
});//main function to initiate the scene

