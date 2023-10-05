import { changeView } from "..";
import changeTurn from "./Local/changeTurn";

let Game = null;
let Iteration;

export default function placeShips(game, iteration){
    Game = game;
    Iteration = iteration;

    let player = (iteration == 1) ? game.playerOne : game.playerTwo;

    let container = document.createElement("div");
    container.setAttribute("id", "place-ships");
    
    let h2 = document.createElement("h2");
    if(iteration == 1) h2.innerHTML = `${game.playerOne.name} place your ships!`;
    else h2.innerHTML = `${game.playerTwo.name} place your ships!`;
    container.appendChild(h2);

    let divOptions = document.createElement("div");
    divOptions.setAttribute("id", "place-board")
    container.appendChild(divOptions);

    let board = document.createElement("div");
    board.classList.add("board");
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let info;
            info = player.board.rows[i][j];
            let cell = document.createElement("div");
            cell.classList.add("board-square");
            if(info.boat){
                cell.classList.add("boat");
            }
            board.appendChild(cell);
        }
    }
    divOptions.appendChild(board);

    let divShips = document.createElement("div");
    divOptions.appendChild(divShips);

    let submarine = document.createElement("form");
    submarine.classList.add("place-inputs");
    submarine.setAttribute("name", "submarine")
    submarine.addEventListener("submit", (e) => boatPlace(e, player));
    divShips.appendChild(submarine);

    let submarineLabel = document.createElement("p");
    submarineLabel.innerHTML = "Submarine: ";
    submarine.appendChild(submarineLabel);

    let submarineX = document.createElement("input");
    submarineX.setAttribute("name", "X");
    submarine.appendChild(submarineX);

    let submarineY = document.createElement("input");
    submarineY.setAttribute("name", "Y");
    submarine.appendChild(submarineY);

    let submarineO = document.createElement("input");
    submarineO.setAttribute("id", "submarineO");
    submarine.appendChild(submarineO);

    let submarineB = document.createElement("button");
    submarineB.innerHTML = "Place";
    submarineB.classList.add("place-button");
    submarine.appendChild(submarineB);

    let carrier = document.createElement("form");
    carrier.classList.add("place-inputs");
    carrier.setAttribute("name", "carrier")
    carrier.addEventListener("submit", (e) => boatPlace(e, player));
    divShips.appendChild(carrier);

    let carrierLabel = document.createElement("p");
    carrierLabel.innerHTML = "Carrier: ";
    carrier.appendChild(carrierLabel);

    let carrierX = document.createElement("input");
    carrierX.setAttribute("id", "carrierX");
    carrier.appendChild(carrierX);

    let carrierY = document.createElement("input");
    carrierY.setAttribute("id", "carrierY");
    carrier.appendChild(carrierY);

    let carrierO = document.createElement("input");
    carrierO.setAttribute("id", "carrierO");
    carrier.appendChild(carrierO);

    let carrierB = document.createElement("button");
    carrierB.innerHTML = "Place";
    carrierB.classList.add("place-button");
    carrier.appendChild(carrierB);

    let patrol = document.createElement("form");
    patrol.classList.add("place-inputs");
    patrol.setAttribute("name", "patrol")
    patrol.addEventListener("submit", (e) => boatPlace(e, player));
    divShips.appendChild(patrol);

    let patrolLabel = document.createElement("p");
    patrolLabel.innerHTML = "Patrol: ";
    patrol.appendChild(patrolLabel);

    let patrolX = document.createElement("input");
    patrolX.setAttribute("id", "patrolX");
    patrol.appendChild(patrolX);

    let patrolY = document.createElement("input");
    patrolY.setAttribute("id", "patrolY");
    patrol.appendChild(patrolY);

    let patrolO = document.createElement("input");
    patrolO.setAttribute("id", "patrolO");
    patrol.appendChild(patrolO);

    let patrolB = document.createElement("button");
    patrolB.innerHTML = "Place";
    patrolB.classList.add("place-button");
    patrol.appendChild(patrolB);

    let battleship = document.createElement("form");
    battleship.classList.add("place-inputs");
    battleship.setAttribute("name", "battleship")
    battleship.addEventListener("submit", (e) => boatPlace(e, player));
    divShips.appendChild(battleship);

    let battleshipLabel = document.createElement("p");
    battleshipLabel.innerHTML = "Battleship: ";
    battleship.appendChild(battleshipLabel);

    let battleshipX = document.createElement("input");
    battleshipX.setAttribute("id", "battleshipX");
    battleship.appendChild(battleshipX);

    let battleshipY = document.createElement("input");
    battleshipY.setAttribute("id", "battleshipY");
    battleship.appendChild(battleshipY);

    let battleshipO = document.createElement("input");
    battleshipO.setAttribute("id", "battleshipO");
    battleship.appendChild(battleshipO);

    let battleshipB = document.createElement("button");
    battleshipB.innerHTML = "Place";
    battleshipB.classList.add("place-button");
    battleship.appendChild(battleshipB);

    let buttonNext = document.createElement("button");
    buttonNext.innerHTML= "Finish";
    buttonNext.addEventListener("click", handlerFinish);
    divShips.appendChild(buttonNext);

    return container;
}

function boatPlace(event, player){
    event.preventDefault();
    let [X,Y,O] = event.target;
    try{
        if(!player.board.placeShip(event.target.name, parseInt(O.value), parseInt(Y.value), parseInt(X.value))) {
            alert("The boat can't be placed there");
            return;
        }
        changeView(placeShips(Game,Iteration));
    }catch(error){
        alert(error);
    }
}

function handlerFinish(){
    if(Iteration == 1) changeView(placeShips(Game, 2));
    else changeView(changeTurn(Game));
}