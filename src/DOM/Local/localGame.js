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
    current.appendChild(divCurrentBoard);
    
    let h2Rival = document.createElement("h2");
    h2Rival.innerHTML = "Rival's board";
    rival.appendChild(h2Rival);
    
    let divRivalBoard = document.createElement("div");
    divRivalBoard.classList.add("board");
    rival.appendChild(divRivalBoard);

    let button = document.createElement("button");
    button.setAttribute("id", "next-button");
    button.innerHTML = "Next turn";
    container.appendChild(button);

    return container;
}