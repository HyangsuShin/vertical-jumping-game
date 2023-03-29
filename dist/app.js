!function(e){function t(t){for(var i,n,o=t[0],h=t[1],c=t[2],f=0,p=[];f<o.length;f++)n=o[f],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(e[i]=h[i]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var h=s[o];0!==r[h]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},r={0:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window.webpackJsonp=window.webpackJsonp||[],h=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=h;a.push([2,1]),s()}({2:function(e,t,s){"use strict";s.r(t);var i=s(0),r=s.n(i);class a extends r.a.Scene{constructor(e,t){super(e),this.config=t,this.screneCenter=[t.width/2,t.height/2],this.fontSize=32,this.lineHeight=42,this.fontOptions={fontSize:this.fontSize+"px",fill:"#fff"},this.fscreen}create(){if(this.add.image(this.config.width/2,this.config.height/2,"background").setOrigin(.5),this.config.canGoBack){this.add.image(this.config.width-10,this.config.height-10,"back").setOrigin(1).setScale(2).setInteractive().on("pointerup",(()=>{this.scene.start("MenuScene")}))}}createMenu(e,t){let s=0;e.forEach((e=>{const i=[this.screneCenter[0],this.screneCenter[1]+s];e.textGO=this.add.text(...i,e.text,this.fontOptions).setOrigin(.5,1),s+=this.lineHeight,t(e)}))}addFScreen(){this.fscreen=this.add.sprite(this.config.width-16,16,"fScreen").setOrigin(1,0).setScale(1.5),this.fscreen.setInteractive().on("pointerdown",(()=>{this.scale.isFullscreen?(this.fscreen.setFrame(0),this.scale.stopFullscreen()):(this.fscreen.setFrame(1),this.scale.startFullscreen())}))}}var n=a;var o=class extends n{constructor(e){super("PlayScene",e),this.cursors=null,this.player=null,this.platform=null,this.firstPlatform=!0,this.platforms=null,this.fire=null,this.isPaused=!1,this.platformHorizontalDistanceRange=[100,150],this.platformVerticalDistanceRange=[150,200],this.difficulties={easy:20,normal:40,hard:60},this.score=0,this.scoreText="",this.joystick}create(){this.currentDifficulty="easy",super.create(),this.createPlatform(),this.createPlatforms(),this.createPlayer(),this.createFire(),this.createCursors(),this.createScore(),this.createPause(),this.createJoystick(),this.listenToEvents(),super.addFScreen()}update(){this.handleInputs(),this.recyclePlatforms(),this.checkGameStatus(),this.increaseDifficulty()}listenToEvents(){this.pauseEvent||(this.pauseEvent=this.events.on("resume",(()=>{this.initialTime=3,this.countDownText=this.add.text(...this.screneCenter,"Start in: "+this.initialTime,this.fontOptions).setOrigin(.5),this.timeEvent=this.time.addEvent({delay:1e3,callback:this.countDown,callbackScope:this,loop:!0})})))}countDown(){this.initialTime--,this.countDownText.setText("Start in: "+this.initialTime),this.initialTime<=0&&(this.isPaused=!1,this.countDownText.setText(""),this.physics.resume(),this.timeEvent.remove())}createPlatform(){this.platform=this.physics.add.image(this.config.width/2,.8*this.config.height,"platform").setImmovable(!0).setVelocityY(20),this.platform.body.allowGravity=!1}createPlatforms(){this.platforms=this.physics.add.group();for(let e=0;e<5;e++){const e=this.platforms.create(this.config.width,.8*this.config.height,"platform").setOrigin(1,0).setImmovable(!0),t=this.platforms.create(this.config.width,.8*this.config.height,"platform").setOrigin(0,0).setImmovable(!0);e.body.allowGravity=!1,t.body.allowGravity=!1,this.placePlatform(e,t)}}createPlayer(){this.player=this.physics.add.sprite(this.config.startPosition.x,this.config.startPosition.y,"player").setScale(.7),this.player.setCollideWorldBounds(!0),this.physics.add.collider(this.player,this.platform),this.physics.add.collider(this.player,this.platforms),this.player.body.gravity.y=200,this.player.setBodySize(.7*this.player.width,.9*this.player.height),this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("player",{start:0,end:9}),frameRate:10,repeat:-1}),this.anims.create({key:"run",frames:this.anims.generateFrameNumbers("player",{start:10,end:17}),frameRate:8,repeat:-1})}createFire(){this.fire=this.add.group().setOrigin(0,1),this.anims.create({key:"fire",frames:this.anims.generateFrameNumbers("fire",{start:0,end:9}),frameRate:10,repeat:-1});let e=0;for(var t=0;t<6;t++){const t=this.fire.create(e,this.config.height,"fire");e+=100,t.play("fire",!0)}}createCursors(){this.cursors=this.input.keyboard.createCursorKeys()}createScore(){this.score=0,this.scoreText=this.add.text(16,16,"Score: 0",this.fontOptions);localStorage.getItem("bestScore")}createPause(){this.add.image(this.config.width-10,this.config.height-10,"pause").setInteractive().setScale(3).setOrigin(1).on("pointerdown",(()=>{this.isPaused=!0,this.physics.pause(),this.scene.pause(),this.scene.launch("PauseScene")}))}createJoystick(){this.joystick=this.plugins.get("rexVirtualJoystick").add(this,{x:this.config.width/7,y:.93*this.config.height,radius:40,base:this.add.circle(0,0,40,8947848),thumb:this.add.circle(0,0,25,13421772)})}handleInputs(){this.cursors.left.isDown||this.joystick.left?(this.player.setVelocityX(-100),this.player.play("run",!0).setFlipX(!0).setOffset(.3*this.player.width,.1*this.player.height)):this.cursors.right.isDown||this.joystick.right?(this.player.setVelocityX(100),this.player.play("run",!0).setFlipX(!1).setOffset(0,.1*this.player.height)):(this.player.setVelocityX(0),this.player.play("idle",!0).setFlipX(!1).setOffset(0,.1*this.player.height)),(this.cursors.up.isDown||this.cursors.space.isDown||this.joystick.up)&&this.player.body.touching.down&&this.player.setVelocityY(-300)}checkGameStatus(){this.player.getBounds().bottom>=this.config.height-1&&this.gameOver()}placePlatform(e,t){const s=this.getYaxisMinPlatform();let i=Phaser.Math.Between(...this.platformHorizontalDistanceRange),r=Phaser.Math.Between(.2*this.config.width,this.config.width-100-i),a=Phaser.Math.Between(...this.platformVerticalDistanceRange);e.x=r,e.y=s-a,t.x=e.x+i,t.y=e.y}recyclePlatforms(){const e=[];this.platforms.getChildren().forEach((t=>{t.getBounds().top>=this.config.height&&(e.push(t),2===e.length&&(this.placePlatform(...e),this.increaseScore(),this.saveBestScore()))})),this.platform.getBounds().top>=this.config.height&&this.firstPlatform&&(this.firstPlatform=!1,this.increaseScore())}saveBestScore(){const e=localStorage.getItem("bestScore"),t=e&&parseInt(e,10);(!t||this.score>t)&&localStorage.setItem("bestScore",this.score)}increaseDifficulty(){const e=this.difficulties[this.currentDifficulty];7===this.score&&(this.currentDifficulty="normal"),14===this.score&&(this.currentDifficulty="hard"),this.platforms.setVelocityY(e)}getYaxisMinPlatform(){let e=this.config.height;return this.platforms.getChildren().forEach((function(t){e=Math.min(t.y,e)})),e}gameOver(){this.scene.start("GameOverScene",{score:this.score}),this.saveBestScore()}increaseScore(){this.score++,this.scoreText.setText("Score: "+this.score)}};class h extends r.a.Scene{constructor(e){super("PreloadScene")}preload(){this.load.image("background","assets/background.jpg"),this.load.image("platform","assets/duct.png"),this.load.spritesheet("fire","assets/fireflame.png",{frameWidth:200,frameHeight:200}),this.load.spritesheet("player","assets/player.png",{frameWidth:80,frameHeight:111}),this.load.image("restart","assets/restart.PNG"),this.load.image("exit","assets/exit.PNG"),this.load.spritesheet("fScreen","assets/fscreen.png",{frameWidth:20,frameHeight:20}),this.load.image("pause","assets/pause.png"),this.load.image("back","assets/back.png")}create(){this.scene.start("MenuScene")}}var c=h;var l=class extends n{constructor(e){super("GameOverScene",e)}init(e){console.log("init",e),this.score=e.score}create(){super.create(),this.createScore();this.add.image(this.config.width/2,this.config.height/2-this.fontSize,"restart").setOrigin(.5,1).setScale(.15).setInteractive().on("pointerdown",(()=>{this.scene.start("PlayScene")}));this.add.image(this.config.width/2,this.config.height/2+this.fontSize,"exit").setOrigin(.5,0).setScale(.15).setInteractive().on("pointerdown",(()=>{this.game.destroy(!0)})),super.addFScreen()}createScore(){this.add.text(...this.screneCenter,"Score: "+this.score,this.fontOptions).setOrigin(.5).setBackgroundColor("#000")}},f=s(1);var p=class extends n{constructor(e){super("MenuScene",e),this.menu=[{scene:"PlayScene",text:"Play"},{scene:"ScoreScene",text:"Score"},{scene:null,text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this)),this.add.text(this.config.width/2,.95*this.config.height,"Programmed by: HyangSuShin",{fontSize:"20px",fill:"#fff"}).setOrigin(.5,1),super.addFScreen()}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{e.scene&&this.scene.start(e.scene),"Exit"===e.text&&this.game.destroy(!0)}))}};var u=class extends n{constructor(e){super("ScoreScene",{...e,canGoBack:!0})}create(){super.create();const e=localStorage.getItem("bestScore");this.add.text(...this.screneCenter,"Best Score: "+(e||0),this.fontOptions).setOrigin(.5),super.addFScreen()}};const d={width:480,height:800,startPosition:{x:384,y:560}},g=[c,p,u,o,class extends n{constructor(e){super("PauseScene",e),this.menu=[{scene:"PlayScene",text:"Continue"},{scene:"MenuScene",text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this)),super.addFScreen()}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#fff"})})),t.on("pointerup",(()=>{e.scene&&"Continue"===e.text?(this.scene.stop(),this.scene.resume(e.scene)):(this.scene.stop("PlayScene"),this.scene.start(e.scene))}))}},l],m=e=>new e(d),y={type:r.a.AUTO,...d,scale:{mode:r.a.Scale.FIT,autoCenter:r.a.Scale.CENTER_BOTH,width:d.width,height:d.height},physics:{default:"arcade",arcade:{}},plugins:{global:[{key:"rexVirtualJoystick",plugin:f.a,start:!0}]},scene:g.map(m)};new r.a.Game(y)}});