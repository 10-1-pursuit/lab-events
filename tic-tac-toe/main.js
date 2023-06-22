
const game = document.querySelector(".tic-tac-toe")

function makeBoard(){
    for(let i = 0; i<9;i++){
        let div = document.createElement("div")
        div.classList.add("empty")
        div.classList.add("square")
        game.append(div)
    }
//     for(let i = 0; i<9;i++){
//         let div = document.createElement("div")
//         div.classList.add("square")
//         game.append(div)
// }
}
makeBoard();

function makeMove(){
    let squares = document.querySelectorAll(".square");
    const voidant = document.querySelectorAll(".empty")

    for(let box of squares){
        
        for(let empty of voidant){
          
        box.addEventListener("click", ()=>{
            if(box.classList.contains("empty")){
                box.textContent = "X";
                empty.classList.remove()
            }
          
        })
       
    }
    
}
}
makeMove()