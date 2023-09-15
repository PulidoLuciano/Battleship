export default function header(){
    let headerContainer = document.createElement("header");

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = "Battleship";
    h1Title.setAttribute("id", "nav-title");

    let restartButton = document.createElement("a");
    restartButton.innerHTML = "Restart";
    restartButton.classList.add("nav-button");

    let creditsButton = document.createElement("a");
    creditsButton.innerHTML = "Credits";
    creditsButton.classList.add("nav-button");
    creditsButton.setAttribute("href", "https://www.instagram.com/pulidoluciano");
    creditsButton.setAttribute("target", "_blank");

    headerContainer.appendChild(creditsButton);
    headerContainer.appendChild(h1Title);
    headerContainer.appendChild(restartButton);
    
    return headerContainer;
}