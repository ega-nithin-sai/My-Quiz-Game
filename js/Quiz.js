class Quiz{
    constructor(){}

    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }

    updateGamestate(newState){
        database.ref('/').update({
            gameState: newState
        });
    }

    async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }

    play(){
        question.hide();

        backgroundColour = "green";

        var secondTitle = createElement('h1');
        secondTitle.html("Results");
        secondTitle.position(400,40);

        getPlayerInfo();

        if(allContestants !== null){
            fill("blue");
            textSize(20);
            text("NOTE: The contestants who answered correct are highlighted in green colour!", 130, 230);

            for(var a in allContestants){
                var correct = "2";
                if(correct === allContestants[plr].answer){
                    fill(green);
                }else{
                    fill(red);
                }
                text(allContestants[plr].name + ": " + allContestants[plr].answer);
            }
        }
    }
}
