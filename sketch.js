var gameState= 0 
var playerCount,database,form,game,player,allplayers 
var distance = 0
var car1 
var car1image
var car2
var car2image
var car3 
var car3image
var car4
var car4image
var cars
var trackimage
 

function preload(){
car1image=loadImage("images/car1.png")
car2image=loadImage("images/car2.png")
car3image=loadImage("images/car3.png")
car4image=loadImage("images/car4.png")
trackimage=loadImage("images/track.jpg")
}
    
function setup (){
createCanvas(displayWidth,displayHeight)
database=firebase.database()
game=new Game()
game.getState()
game.start()


}
function draw (){
if(playerCount===4){
    game.update(1)
}
if(gameState===1){
clear()
game.play()


}
if(gameState===2){
game.end()



}
}
