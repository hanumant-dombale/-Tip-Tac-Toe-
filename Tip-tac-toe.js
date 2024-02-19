let boxes = document.querySelectorAll(".box");
let winnerMge = document.querySelector(".winner");
let newGmaeBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let mge = document.querySelector(".mge");

let turnO = true; // playerX or playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

const showWinner = (winner) => {
    mge.innerText = `Congratulation, Winner is ${winner}`;
    winnerMge.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winnerMge.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

newGmaeBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);