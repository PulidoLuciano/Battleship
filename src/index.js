import header from "./DOM/header";
import footer from "./DOM/footer";
import "./style.css";
import start from "./DOM/start";
import content from "./DOM/content";

export function page(){
    let root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(header());
    root.appendChild(content(start()));
    root.appendChild(footer());
}

export function changeView(component){
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(component);
}

page();