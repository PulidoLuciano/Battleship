let Game = null;

export default function localGame(game){
    Game = game;
    
    let container = document.createElement("div");
    container.setAttribute("id", "localGame");

    let boards = document.createElement("div");
    boards.setAttribute("id", "boards-container");
    container.appendChild(boards);

    let current = document.createElement("div");
    boards.appendChild(current);

    let rival = document.createElement("div");
    boards.appendChild(rival);

    let h2Me = document.createElement("h2");
    h2Me.innerHTML = "Your board";
    current.appendChild(h2Me);
    
    let divCurrentBoard = document.createElement("div");
    divCurrentBoard.classList.add("board");
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let info = game.current.player.board.rows[i][j];
            let cell = document.createElement("div");
            cell.classList.add("board-square");
            if(info.boat){
                cell.classList.add("boat");
            }
            if(info.shooted){
                cell.innerHTML = "X";
            }
            divCurrentBoard.appendChild(cell);
        }
    }
    current.appendChild(divCurrentBoard);
    
    let h2Rival = document.createElement("h2");
    h2Rival.innerHTML = "Rival's board";
    rival.appendChild(h2Rival);
    
    let divRivalBoard = document.createElement("div");
    divRivalBoard.classList.add("board");
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let info = game.current.rival.board.rows[i][j];
            let cell = document.createElement("div");
            cell.classList.add("board-square");
            if(info.shooted){
                cell.innerHTML = "X";
                if(info.boat){
                cell.classList.add("boat");
                }
            }else{
                cell.classList.add("unshooted-cell");
            }
            divRivalBoard.appendChild(cell);
        }
    }
    rival.appendChild(divRivalBoard);

    let button = document.createElement("button");
    button.setAttribute("id", "next-button");
    button.innerHTML = "Next turn";
    container.appendChild(button);

    return container;
}