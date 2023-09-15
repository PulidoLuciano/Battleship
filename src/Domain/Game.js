import Player from "./Player";

class Game{
    constructor(playerOne, playerTwo){
        this.playerOne = new Player(playerOne);
        this.playerTwo = new Player(playerTwo);
        this.current = {
            player : this.playerOne,
            hasAttacked : false,
        };
    }

    nextTurn(){
        if(this.current.player === this.playerOne) this.current = this.playerTwo;
        this.current.player = this.playerOne;
    }

    attack(row, column){
        let opponent = (this.current.player === this.playerOne) ? this.playerTwo : this.playerOne;
        if(this.current.hasAttacked) {
            this.current.hasAttacked = true;
            return this.current.player.attack(row, column, opponent.board);
        }
    }
}

export default Game;