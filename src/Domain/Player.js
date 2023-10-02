import Board from "./Board"

class Player{
    constructor(name){
        this.name = name;
        this.board = new Board();
        this.board.placeShip("submarine", 1, 0, 0);
    }

    attack(row, column, opponentBoard){
        return opponentBoard.receiveAttack(row, column);
    }

    hasLost(){
        return !this.board.shipsRemain();
    }
}

export default Player;