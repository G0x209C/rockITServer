
class Player
{
    // fields
    id;
    name;
    score;
    static playerCount;

    // constructor
    constructor(id,{name="Player"})
    {
        if(id === null || typeof(id) != "string"){
            return Error("Can't have a player without ID");
        }else
        {
            this.id = id;
        }
        this.name = name;
        this.score = 0;
        Player.playerCount++;
    }
    // functions

    destroy()
    {
        Player.playerCount--;
        // remove player instance afterwards.
        // thanks javascript, for not having deconstructors.. :)
    }

    // player identity getters and setters
    getId()
    {
        return this.id;
    }
    setId(id)
    {
        typeof(id) == "string" ? this.id = id : console.log('Error: Tried setting player.ID with wrong type: ' + typeof(id));
    }

    getName(){
        return this.name;
    }
    setName(name)
    {
        typeof(name) == "string" ? this.name = name: console.log('Error: Tried setting player.name with wrong type: ' + typeof(name));
    }

    // score getters and setters
    getScore()
    {
        return this.score;
    }
    setScore(score)
    {
        typeof(score) == "number" ? this.score = score : console.log('Error: Tried setting player.score with wrong type: ' + typeof(score));
    }
    addScore(score)
    {
        typeof(score) == "number" ? this.score += score : console.log('Error: Tried adding score to player.score with wrong type: ' + typeof(score));
    }
}

module.exports = Player;