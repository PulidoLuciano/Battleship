import header from "./DOM/header";
import footer from "./DOM/footer";
import "./style.css";
import start from "./DOM/start";
import content from "./DOM/content";

function page(){
    let root = document.getElementById("root");
    root.appendChild(header());
    root.appendChild(content(start()));
    root.appendChild(footer());
}

page();