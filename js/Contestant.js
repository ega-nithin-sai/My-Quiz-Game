class Contestant{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }

    getCount(){
        database.ref("contestantCount").on("value",(data) => {
            contestantCount = data.val();
        })
    }

    updateCount(newCount){
        database.ref("/").update({
            contestantCount:newCount
        });
    }

    update(){
        var contestantPrefix = "contestant" + this.index;
        database.ref(contestantPrefix).set({
            name:this.name,
            answer:this.answer
        });
    }

    static getPlayerInfo(){
        database.ref('contestants').on("value",(data)=>{
            allContestants = data.val();
        })
    }
}