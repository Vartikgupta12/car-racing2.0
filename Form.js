class Form{
constructor(){
    this.input=createInput("name")
    this.button=createButton("play") 
    this.greeting=createElement('h3')
    this.reset=createButton("reset ")
}
hide(){

    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
var title= createElement('h2')
title.html("Car racing game")
title.position(displayWidth/2-40,50)
this.input.position(displayWidth/2-40,displayHeight/2-50)
this.button.position(displayWidth/2-20,displayHeight/2)
this.reset.position(displayWidth-50,100)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index = playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("Hello"+ " "+player.name)
    this.greeting.position(displayWidth/2-20,displayHeight/4)
})
this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)

})
}

}