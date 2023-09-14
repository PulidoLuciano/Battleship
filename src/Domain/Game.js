class Game{
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.current = {
            player : playerOne,
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