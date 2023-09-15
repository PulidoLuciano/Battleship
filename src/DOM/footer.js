function footer(){
    let footerContainer = document.createElement("footer");
    
    let p = document.createElement("p");
    p.innerHTML = "© Luciano Pulido";

    footerContainer.appendChild(p);
    return footerContainer;
}

export default footer;