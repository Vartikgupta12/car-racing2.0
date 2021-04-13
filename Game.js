class Game{
constructor(){

}
getState(){
var gameStateref=database.ref('gameState')     
gameStateref.on("value",function(data){
    gameState=data.val();
})
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
if(gameState===0){
player=new Player()
var playercountref = await database.ref('playerCount').once("value") 
if(playercountref.exists()){
playerCount = playercountref.val()
player.getCount()

}
form=new Form()
form.display()

}
car1=createSprite(100,200)
car1.addImage(car1image)
car2=createSprite(300,200)
car2.addImage(car2image)
car3=createSprite(500,200)
car3.addImage(car3image)
car4=createSprite(700,200)
car4.addImage(car4image)
cars=[car1,car2,car3,car4]

}
play(){
    form.hide()
       player.getcarsatend()
        Player.getplayerinfo()
        if(allplayers!==undefined){
background("#BA976A")
image(trackimage,0,-displayHeight*5,displayWidth,displayHeight*6)
var index=0
var x=170
var y
for(var plr in allplayers){
    index=index+1
    x=x+200
    y=displayHeight-allplayers[plr].distance
    cars [index-1].x=x;
    cars [index-1].y=y;

    if(index=== player.index){
        stroke(10)
        fill("red") 
        ellipse(x,y,60,60) 
     cars[index-1].shapeColor="red"
     camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
    }

    
//displayposition=displayposition+20
//text(allplayers[plr].name+":"+allplayers[plr].distance,displayWidth/2-20,displayposition)
}
}
if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance=player.distance+50
player.update()
}
if(player.distance>3900){
gameState=2
player.rank=player.rank+1
Player.updatecarsatend(player.rank)
console.log (player.distance)
}
drawSprites()        
}

end(){


    console.log("game ended")
console.log(player.rank)

}
}
