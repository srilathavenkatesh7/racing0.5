class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async  start(){
    if(gameState === 0){
      player = new Player();
      var playercountref=await database.ref('playerCount').once("value");
      if(playercountref.exists() ){
        playerCount=playercountref.val();
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hiding();
    textSize (30);
    text ("Game Start",120,100);
    Player.getplayerinfo();
    if(allplayers!==undefined){
      var displayposition=130
      for (var plr in allplayers){
        if(plr==="player"+player.index){
          fill ("red")
        
        }
        else{
          fill ("black")
        }
        displayposition=displayposition+20;
        textSize (15);
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition);
      if(keyIsDown(UP_ARROW) && player.index!==null){
        player.distance=player.distance+50;
        player.update();
      }
      }
    }

  }
}
