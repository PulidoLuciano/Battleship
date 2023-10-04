import { page } from "..";

export default function endedGame(winner){
    let container = document.createElement("div");
    container.classList.add("win-section");

    let h2 = document.createElement("h2");
    h2.innerHTML = `${winner.name} has won!`;
    container.appendChild(h2);

    let button = document.createElement("button");
    button.innerHTML = "Main page";
    button.addEventListener("click", handlerButton);
    container.appendChild(button);

    return container;
}

function handlerButton(){
    page();
}