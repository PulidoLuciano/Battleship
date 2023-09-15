import header from "./DOM/header";
import "./style.css";

function page(){
    let root = document.getElementById("root");
    root.appendChild(header());
}

page();