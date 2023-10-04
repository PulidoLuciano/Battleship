import Player from "./Player";

class Game{
    constructor(playerOne, playerTwo){
        this.playerOne = new Player(playerOne);
        this.playerTwo = new Player(playerTwo);
        this.current = {
            player : this.playerOne,
            rival: this.playerTwo,
            hasAttacked : false,
        };
    }

    nextTurn(){
        if(this.current.player === this.playerOne) 
            this.current = {
                player : this.playerTwo,
                rival: this.playerOne,
                hasAttacked : false,
            };
        else
            this.current = {
                player : this.playerOne,
                rival: this.playerTwo,
                hasAttacked : false,
            };
    }

    attack(row, column){
        let opponent = (this.current.player === this.playerOne) ? this.playerTwo : this.playerOne;
        if(!this.current.hasAttacked) {
            if(!this.current.player.attack(row, column, opponent.board) || this.hasEnded()) this.current.hasAttacked = true;
        }
    }

    hasEnded(){
        if(!(this.playerOne.hasLost() || this.playerTwo.hasLost())) return null;
        if(this.playerOne.hasLost()) return this.playerTwo;
        return this.playerOne;
    }
}

export default Game;