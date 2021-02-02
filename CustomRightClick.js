//  Init CSS  //
document.write(`
<style>
.CustomRightClick_Container {
    background-color: #222;
    border-radius: 0.25em;
    width: 15em;
    padding-top: 0.5em;
    position: absolute;
}

.CustomRightClick_Button {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #222;
    color: white;
    text-align: left;
    outline: none;
    border: none;
    margin: 0.5em;
    padding: 0.5em;
    margin-top: 0em;
    border-radius: 0.25em;
    width: 94%;
}

.CustomRightClick_Button:hover {
    background-color: #333;
}
</style>
`)

window.onload = function() {
    //  Init Main HTML  //
    var body = document.getElementsByTagName("BODY")[0];
    const menu = document.createElement("div");
    menu.id = "CustomRightClick_Menu"
    menu.classList.add("CustomRightClick_Container");
    menu.style.visibility = "hidden";
    body.appendChild(menu);

    //  Init Options  //
    for (item in options) {
        const entry = document.createElement("span");
        entry.innerHTML = `<button class="CustomRightClick_Button" onclick="${options[item].function}">${options[item].title}</button>`;
        menu.appendChild(entry);
    }
}

//  Handle Right Click  //
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    const menu = document.getElementById("CustomRightClick_Menu");
    //  Variables  //
    const menuHeight = menu.offsetHeight;
    const menuWidth = menu.offsetWidth;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const clickx = event.clientX;
    const clicky = event.clientY;
    
    if (clickx + menuWidth > screenWidth && clicky + menuHeight > screenHeight) {
        menu.style.left = `${clickx-menuWidth}px`;
        menu.style.top = `${clicky-menuHeight}px`;

    } else if (clickx + menuWidth > screenWidth) {
        menu.style.left = `${clickx-menuWidth}px`;
        menu.style.top = `${clicky}px`;

    } else if (clicky + menuHeight > screenHeight) {
        menu.style.left = `${clickx}px`;
        menu.style.top = `${clicky-menuHeight}px`;

    } else {
        menu.style.left = `${clickx}px`;
        menu.style.top = `${clicky}px`;
    }
    menu.style.visibility = "visible";

    return;
});

//  Handle Left Click  //
document.addEventListener('click', function(event) {
    const menu = document.getElementById("CustomRightClick_Menu");
    menu.style.visibility = "hidden";
    return;
});