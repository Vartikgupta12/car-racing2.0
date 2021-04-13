class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
this.rank=null;

 }
    getCount(){
        var playerCountref=database.ref('playerCount')     
        playerCountref.on("value",function(data){
            playerCount=data.val();
        })
        }
        updateCount(count){
            database.ref('/').update({
                playerCount:count
            })
        }
        update(){
            var playerIndex="players/player"+this.index
            database.ref(playerIndex).set({
                name:this.name,
                distance:this.distance
            })

        }
static getplayerinfo(){
var playerinforef=database.ref('players')
playerinforef.on("value",(data)=>{
allplayers=data.val()

})

}
getcarsatend(){
database.ref('caratend').on("value",(data)=>{
    this.rank=data.val()
})


}
static updatecarsatend (rank){
database.ref('/').update({
caratend:rank 
})

}
    }