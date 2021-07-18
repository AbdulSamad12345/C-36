var database;
var GameState = 0;
var PlayerCount

var form, game, player;

 
function setup(){

    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    


}


function draw(){

}







