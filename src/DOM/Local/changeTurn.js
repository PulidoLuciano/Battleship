import { changeView } from "../..";
import localGame from "./localGame";

let Game = null;

export default function changeTurn(game){
    Game = game;
    
    let container = document.createElement("div");
    container.classList.add("change-Turn");
    
    let h2Title = document.createElement("h2");
    h2Title.innerHTML = `Next turn: ${game.current.player.name}`;
    container.appendChild(h2Title);

    let p = document.createElement("p");
    p.innerHTML = `Make sure the other player is not watching`;
    container.appendChild(p);

    let button = document.createElement("button");
    button.innerHTML = "Continue";
    button.addEventListener("click", continueHandler);
    container.appendChild(button);

    return container;
}

function continueHandler(){
    changeView(localGame(Game));
}