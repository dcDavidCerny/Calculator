const resultDisplay = document.querySelector('.trueResult');
const deleteResult = document.querySelector('.deleteResult');
const buttons = document.querySelectorAll('.circleCell');
const calculator = document.querySelector('.calculator');

const calcColorsMenu = document.querySelector(".calcColors");
const cellColorsMenu = document.querySelector(".cellColors");


const aquaCalc = document.querySelector(".aquaCalc");
const limeCalc = document.querySelector(".limeCalc");
const bananaCalc = document.querySelector(".bananaCalc");
const orangeCalc = document.querySelector(".orangeCalc");
const pinkCalc = document.querySelector(".pinkCalc");
const coolColorCalc = document.querySelector(".coolColorCalc");
const decentCalc = document.querySelector(".decentCalc");
const sunsetCalc = document.querySelector(".sunsetCalc");
const opticalIllusionsCalc = document.querySelector(".opticalIllusionsCalc");
const wineCalc = document.querySelector(".wineCalc");

const aquaCell = document.querySelector(".aquaCell");
const limeCell = document.querySelector(".limeCell");
const bananaCell = document.querySelector(".bananaCell");
const orangeCell = document.querySelector(".orangeCell");
const pinkCell = document.querySelector(".pinkCell");
const coolColorCell = document.querySelector(".coolColorCell");
const decentCell = document.querySelector(".decentCell");
const sunsetCell = document.querySelector(".sunsetCell");
const whiteCell = document.querySelector(".whiteCell");
const wineCell = document.querySelector(".wineCell");

aquaCalc.addEventListener("click", function () {
    calculator.style.background = "aqua";
})
limeCalc.addEventListener("click", function () {
    calculator.style.background = "rgb(43, 255, 145)";
})
bananaCalc.addEventListener("click", function () {
    calculator.style.background = "rgb(221, 255, 0)";
})
orangeCalc.addEventListener("click", function () {
    calculator.style.background = "rgb(255, 170, 0)";
})
pinkCalc.addEventListener("click", function () {
    calculator.style.background = "rgb(255, 0, 225)";
})
coolColorCalc.addEventListener("click", function () {
    calculator.style.background = "radial-gradient(#f69d3c, #3f87a6)";
})
decentCalc.addEventListener("click", function () {
    calculator.style.background = "radial-gradient(aqua, rgb(169, 169, 169))";
})
sunsetCalc.addEventListener("click", function () {
    calculator.style.background = "radial-gradient(yellow, rgb(255, 51, 0))";
})
opticalIllusionsCalc.addEventListener("click", function () {
    calculator.style.background = "radial-gradient(black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white, black, white)";
})
wineCalc.addEventListener("click", function () {
    calculator.style.background = "radial-gradient(pink, rgb(255, 90, 117), rgb(100, 13, 27))";
})



aquaCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "aqua";
    })
})
limeCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "rgb(43, 255, 145)";
    })
})
bananaCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "rgb(221, 255, 0)";
    })
})
orangeCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "rgb(255, 170, 0)";
    })
})
pinkCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "rgb(255, 0, 225)";
    })
})
coolColorCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "radial-gradient(#f69d3c, #3f87a6)";
    })
})
decentCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "radial-gradient(aqua, rgb(169, 169, 169))";
    })
})
sunsetCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "radial-gradient(yellow, rgb(255, 51, 0))";
    })
})
whiteCell.addEventListener("click", function () {
    buttons.forEach(button => {
        button.style.background = "white";
    })
})
wineCell.addEventListener("click", function () {
    ;
    buttons.forEach(button => {
        button.style.background = "radial-gradient(pink, rgb(255, 90, 117), rgb(100, 13, 27))";
    })
})




let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.getAttribute('value');

        if (value === '=') {
            try {
                currentInput = eval(currentInput) ?? "";

            } catch {
                currentInput = 'Error';
            }
        } else if (value === 'C') {
            currentInput = '';
        } else {
            let logicChecker = currentInput.charAt(currentInput.length - 1);
            if (["/", "*", "+", "-", ".", ""].includes(logicChecker) && ["/", "*", "+", "-", "."].includes(value)
            ) {
                return;
            }
            if (value === ".") {
                let index = (currentInput.length - 1)
                while (index >= 0) {
                    const char = currentInput.charAt(index);
                    console.log("proccesing char " + char)
                    if (["/", "*", "+", "-", ""].includes(char)) {
                        console.log("I found a special char, ending while");
                        break
                    }
                    if (char === ".") {
                        console.log("I found a . and returning, because I want to prevent . after . also called dot");

                        return;
                    }
                    index--;
                }
            }
            currentInput += value;
        }

        resultDisplay.textContent = currentInput;
    });
});

let fuuck = true;

calcColorsMenu.addEventListener("click", () => {
    fuuck = !fuuck;
    if (fuuck) {
        document.querySelector(".calcColorsUL").style.visibility = "visible";
    }
    else {
        document.querySelector(".calcColorsUL").style.visibility = "hidden";
    }
})

let fuck = true;

cellColorsMenu.addEventListener("click", () => {
    fuck = !fuck;
    if (fuck) {
        document.querySelector(".cellColorsUL").style.visibility = "visible";
    }
    else {
        document.querySelector(".cellColorsUL").style.visibility = "hidden";
    }
})



deleteResult.addEventListener('click', function () {
    currentInput = '';
    resultDisplay.textContent = currentInput;
});