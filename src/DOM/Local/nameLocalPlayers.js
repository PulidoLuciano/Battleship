import Game from "../../Domain/Game";

function nameLocalPlayers(){
    let nameLocalcontainer = document.createElement("div");
    
    let title = document.createElement("h2");
    title.innerHTML = "NAME THE PLAYERS";

    let titlePlayerOne = document.createElement("h3");
    titlePlayerOne.innerHTML = "Player One:";

    let titlePlayerTwo = document.createElement("h3");
    titlePlayerTwo.innerHTML = "Player Two:";

    let inputPlayerOne = document.createElement("input");
    inputPlayerOne.setAttribute("id", "PlayerOneName");

    let inputPlayerTwo = document.createElement("input");
    inputPlayerTwo.setAttribute("id", "PlayerTwoName");

    let buttonConfirm = document.createElement("button");
    buttonConfirm.addEventListener("click", confirmHandler);
    buttonConfirm.innerHTML = "Play";

    nameLocalcontainer.appendChild(title);
    nameLocalcontainer.appendChild(titlePlayerOne);
    nameLocalcontainer.appendChild(inputPlayerOne);
    nameLocalcontainer.appendChild(titlePlayerTwo);
    nameLocalcontainer.appendChild(inputPlayerTwo);
    nameLocalcontainer.appendChild(buttonConfirm);

    return nameLocalcontainer;
}

function confirmHandler(){
    let nameOne = document.getElementById("PlayerOneName").value;
    let nameTwo = document.getElementById("PlayerTwoName").value;

    let game = new Game(nameOne, nameTwo);
    console.log(game);
}

export default nameLocalPlayers;