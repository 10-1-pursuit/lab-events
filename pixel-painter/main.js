const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    main.append(div);

}


document.querySelectorAll(".color").forEach((color) => {
    color.addEventListener("click", (event) => {
        document.querySelector("#current-color").style.backgroundColor = event.target.style.backgroundColor;

    });

});


document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (event) => {

        event.target.style.backgroundColor = document.querySelector("#current-color").style.backgroundColor;

    });


});