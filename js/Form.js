class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(110,0);

        var input = createInput("Name");
        var button = createButton("Play");
        input.position(130,160);
        button.position(150,180);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            
            PlayerCount = PlayerCount+1;
            player.update(name);
            player.updateCount(PlayerCount);

            var greeting = createElement("h2");
            greeting.html("Hello "+name);
            greeting.position(150,200);
   
        });


    }
}