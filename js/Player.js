class Player{
    constructor(){

    }

    getCount(){
        var getCountRef = database.ref("PlayerCount");
        getCountRef.on("value",function(data){
       PlayerCount = data.val();
        });

    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount:count
        });
    }

    update(name){
       var playerIndex = "Player"+ PlayerCount;
       database.ref(playerIndex).set({
          Name:name
       });
    }
    }