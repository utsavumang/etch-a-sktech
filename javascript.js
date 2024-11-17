container =  document.querySelector('.container')


for (let i = 0; i < 8; i++){
    const divrow = document.createElement("div");
    container.appendChild(divrow);
    divrow.classList.add("row");

    for (let i = 0; i < 8; i++) {
        const divcell = document.createElement("div")
        divrow.appendChild(divcell);
        divcell.classList.add("cell")
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        divcell.style.backgroundColor = '#'+randomColor;
    }
}



container.addEventListener("click", function(e) {

    let targ = e.target;
    if (!targ.classList.contains('cell')){
        return;
    }
    darken(targ);
})

function darken(box) {
    if (!box.classList.contains('dark')){
        box.classList.toggle("dark");
        box.classList.toggle('dark1');
    } 

    else if (box.classList.contains('dark1')) {
        box.classList.toggle("dark1");
        box.classList.toggle("dark2");
    }
    
    else if (box.classList.contains('dark2')) {
        box.classList.toggle("dark2");
        box.classList.toggle("dark3");
    }

    else if (box.classList.contains('dark3')) {
        box.classList.toggle("dark3");
        box.classList.toggle("dark4");
    }

    else if (box.classList.contains('dark4')) {
        box.classList.toggle("dark4");
        box.classList.toggle("dark5");
    }
    

    // box.style.backgroundColor = "rgb(0,0,0,100%)";
}
container.rem

function changeCanvasSize() {
    let size = parseInt(prompt("Enter the number of tiles per side", "16"));
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

    for (let i = 0; i < size; i++){
        const divrow = document.createElement("div");
        container.appendChild(divrow);
        divrow.classList.add("row");
    
        for (let i = 0; i < size; i++) {
            const divcell = document.createElement("div")
            divrow.appendChild(divcell);
            divcell.classList.add("cell")
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            divcell.style.backgroundColor = '#'+randomColor;
        }
    }
    
} 

btn = document.querySelector('.btn');
btn.addEventListener("click", changeCanvasSize);

