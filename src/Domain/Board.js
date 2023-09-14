import Ship from "./Ship"

class Board{
    constructor(){
        this.rows = this.createBoard();
        this.ships = [];
    }

    createBoard = () => {
        let rows = [];
        for(let i = 0; i < 10; i++){
            rows.unshift(this.createRows());
        }
        return rows;
    }

    createRows = () => {
        let cells = []
        for(let j = 0; j < 10; j++){
            cells.unshift({
                shooted : false,
                boat : null,
                blocked: false,
            })
        }
        return cells;
    }

    placeShip(type, orientation, row, column){
        let ship = new Ship(type);
        let boatCells = [];
        let blockCells = [];
        switch(orientation){
            case 0:
                if((row + ship.size) > 10) return false;
                for(let i = row; i < row+ship.size; i++){
                    if(this.rows[i][column].blocked) return false;
                    boatCells.push(this.rows[i][column]);
                }
                for(let i = row-1; i < row+ship.size+1; i++){
                    if(i < 0 || i >= 10) continue;
                    for(let j = -1; j < 2; j++){
                        let index = column+j;
                        if(index < 0 || index >= 10) continue;
                        blockCells.push(this.rows[i][index]);
                    }
                }
                break;
            case 1:
                if((column + ship.size) > 10) return false;
                for(let i = column; i < column+ship.size; i++){
                    if(this.rows[row][i].blocked) return false;
                    boatCells.push(this.rows[row][i]);
                }
                for(let i = column-1; i < column+ship.size+1; i++){
                    if(i < 0 || i >= 10) continue;
                    for(let j = -1; j < 2; j++){
                        let index = row+j;
                        if(index < 0 || index >= 10) continue;
                        blockCells.push(this.rows[index][i]);
                    }
                }
                break;
            default:
                throw new Error("Orientation must to be 0(vertical) or 1(horizontal)");
        }
        boatCells.forEach(cell => {
            cell.boat = ship;
        });
        blockCells.forEach(cell => {
            cell.blocked = true;
        })
        this.ships.push(ship);
        return true;
    }

    receiveAttack(row, column){
        if(this.rows[row][column].shooted) throw new Error("That cells was shooted before");
        if(this.rows[row][column].boat == null){
            this.rows[row][column].shooted = true;
            return false;
        }
        this.rows[row][column].boat.hit();
        return true;
    }

    shipsRemain(){
        for(let i = 0; i < this.ships.length; i++){
            if(!this.ships[i].isSunk()) return true;
        }
        return false;
    }
}

export default Board;