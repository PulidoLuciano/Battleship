import {changeView} from "../index";
import chooseMode from "./chooseMode";

function start(){
    let buttonStart = document.createElement("button");
    buttonStart.setAttribute("id", "start-button");
    buttonStart.innerHTML = "START";
    buttonStart.addEventListener("click", startHandler)

    return buttonStart;
}

function startHandler(){
    changeView(chooseMode());
}

export default start;