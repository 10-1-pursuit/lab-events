const test = console.log
const section = document.querySelector("section")
const title = document.querySelector("h1")
const button = document.querySelector("button")



let board = document.createElement("container")
board.classList.add("board")

function makeBoard() {
 
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div")
        tile.classList.add("empty")
        tile.classList.add("square")
        test(tile)
        board.appendChild(tile)
    }
   section.insertBefore(board,button )
   test(board)
}

makeBoard()
const tiles = document.getElementsByClassName("square")
const container = document.getElementsByClassName("board")

test(tiles,container)