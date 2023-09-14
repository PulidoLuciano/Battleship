class Ship{
    constructor(type){
        this.size = this.sizeByType(type);
        this.hits = 0;
        this.sunk = false;
    }

    sizeByType = (type) => {
        switch(type){
            case "submarine":
                return 3;
            case "carrier":
                return 5;
            case "patrol":
                return 2;
            case "battleship":
                return 4;
            default:
                throw new Error(`${type} type doesn't exists`);
        }
    }

    hit = () =>{
        this.hits++;
        if(this.hits == this.size) this.sunk = true;
        return this.sunk;
    }

    isSunk = () => {
        return this.sunk;
    }
}

export default Ship;