container =  document.querySelector('.container')


for (let i = 0; i < 66; i++){
    const divrow = document.createElement("div");
    container.appendChild(divrow);
    divrow.classList.add("row");

    for (let i = 0; i < 66; i++) {
        const divcell = document.createElement("div")
        divrow.appendChild(divcell);
        divcell.classList.add("cell")
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        divcell.style.backgroundColor = '#'+randomColor;
    }
}

container.addEventListener("click", function(e) {

    let targ = e.target;

    darken(targ);
})

function darken(box) {

    box.style.backgroundColor = 'black';
}