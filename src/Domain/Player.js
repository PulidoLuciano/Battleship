import Board from "./Board"

class Player{
    constructor(name){
        this.name = name;
        this.board = new Board();
    }

    attack(row, column, opponentBoard){
        return opponentBoard.receiveAttack(row, column);
    }

    hasLost(){
        return !this.board.shipsRemain();
    }
}

export default Player;