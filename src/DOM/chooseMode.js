function chooseMode(){
    let container = document.createElement("div");
    container.setAttribute("id", "choose")

    let title = document.createElement("h2");
    title.innerHTML = "Choose the game mode";

    let divButtons = document.createElement("div");
    divButtons.classList.add("flex");

    let buttonIA = document.createElement("button");
    buttonIA.classList.add("mode-button");
    buttonIA.addEventListener("click", iaHandler);
    buttonIA.innerHTML = "Computer ";

    let buttonLocal = document.createElement("button");
    buttonLocal.classList.add("mode-button");
    buttonLocal.addEventListener("click", localHandler);
    buttonLocal.innerHTML = "Local";

    let buttonOnline = document.createElement("button");
    buttonOnline.classList.add("mode-button");
    buttonOnline.addEventListener("click", onlineHandler);
    buttonOnline.innerHTML = "Online";

    container.appendChild(title);
    divButtons.appendChild(buttonIA);
    divButtons.appendChild(buttonLocal);
    divButtons.appendChild(buttonOnline);
    container.appendChild(divButtons);
    return container;
}

function iaHandler(){
    alert("This mode is going to be soon! Try another mode");
}

function localHandler(){

}

function onlineHandler(){
    alert("This mode is going to be soon! Try another mode");
}

export default chooseMode;