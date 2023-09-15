import header from "./DOM/header";
import footer from "./DOM/footer";
import "./style.css";

function page(){
    let root = document.getElementById("root");
    root.appendChild(header());
    root.appendChild(footer());
}

page();