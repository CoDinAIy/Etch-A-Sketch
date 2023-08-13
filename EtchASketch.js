const container = document.querySelector("#container")


for ( i = 1; i < 16; i++) {
    let div = document.createElement("div")
    for (i = 1; i < 16; i++) {
        let cells = document.createElement("div")
        cells.textContent = "IHUI"
        div.appendChild(cells).className = "cell"
    } 
    container.appendChild(div).className = "row"
}

