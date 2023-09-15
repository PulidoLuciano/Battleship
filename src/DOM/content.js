function content(component){
    let contentSection = document.createElement("section");
    contentSection.setAttribute("id", "content");

    contentSection.appendChild(component);
    return contentSection;
}

export default content;