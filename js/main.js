/*----------------------------------- Start Game  -----------------------------*/
//Variables
let scoreNumber = document.querySelector(".game .game-header .count");
let allButton = document.querySelectorAll(".game .start-game button img");
let allTools = document.querySelectorAll(".game .game-body .tool");
let resultGame = document.querySelector(".game .result");
let resultText = document.querySelector(".game-result .result-text");
let user = document.querySelector(".game .user");
let house = document.querySelector(".game .house");
let userPick = document.querySelector(".user-pick button img");
let housePick = document.querySelector(".game .game-result .house-pick .house-tool");
let housePickOverlay = document.querySelector(".game .house-pick-overlay");
let housePickImage = document.querySelector(".house-pick button img");
let allImages = ["scissors", "spock", "paper", "lizard", "rock"];
let allToolsBackgroundColor = ["#eca922", "#40b9ce", "#4865f4", "#834fe3", "#dc2e4e"];
let allToolsBoxShadowColor = ["#d06b13", "#2e89a8", "#2946bb", "#5c36a7", "#9b1432"];
let stratGame = document.querySelector(".game .start-game");
let gameResult = document.querySelector(".game .game-result");
let playAgainButton = document.querySelector(".game .result button");

let scissors = document.querySelector(".start-game .icon-scissors").src;
let spock = document.querySelector(".start-game .icon-spock").src;
let paper = document.querySelector(".start-game .icon-paper").src;
let lizard = document.querySelector(".start-game .icon-lizard").src;
let rock = document.querySelector(".start-game .icon-rock").src;

//Set Score Number From sessionStorage
if (sessionStorage.length > 0) {
    scoreNumber.innerText = sessionStorage.getItem("score");
}

//Start Game Key
allButton.forEach((btn) => {
    btn.parentElement.addEventListener("mouseover", () => {
        btn.parentElement.parentElement.classList.add("scale");
    });
    btn.parentElement.addEventListener("mouseout", () => {
        btn.parentElement.parentElement.classList.remove("scale");
    });
    //Start Game Try
    btn.addEventListener("click", () => {
        userPick.src = btn.src;
        userPick.parentElement.parentElement.style.backgroundColor = btn.parentElement.parentElement.dataset.color;
        userPick.parentElement.parentElement.style.boxShadow = `0px 3px ${btn.parentElement.parentElement.dataset.shadow}`;
        stratGame.style.display = "none";
        gameResult.style.display = "flex";
        document.querySelector(".click").play();

        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * allButton.length);
            housePick.style.display = "flex";
            housePick.style.backgroundColor = allToolsBackgroundColor[randomNumber];
            housePick.style.boxShadow = `0px 3px ${allToolsBoxShadowColor[randomNumber]}`;
            housePickOverlay.style.display = "none";
            housePickImage.src = (`./images/icon-${allImages[randomNumber]}.svg`);
        }, 1500);

        setTimeout(() => {
            switch (userPick.src) {
                case scissors:
                    switch(housePickImage.src) {
                        case spock:
                        case rock:
                            resultText.innerText = "you lose";
                            break;
                        case paper:
                        case lizard:
                            resultText.innerText = "you win";
                            break;
                        default:
                            resultText.innerText = "you tie";
                            break;
                    }
                    break;
                
                case paper:
                    switch(housePickImage.src) {
                        case scissors:
                        case lizard:
                            resultText.innerText = "you lose";
                            break;
                        case spock:
                        case rock:
                            resultText.innerText = "you win";
                            break;
                        default:
                            resultText.innerText = "you tie";
                            break;
                    }
                    break;
                
                case rock:
                    switch(housePickImage.src) {
                        case paper:
                        case spock:
                            resultText.innerText = "you lose";
                            break;
                        case lizard:
                        case scissors:
                            resultText.innerText = "you win";
                            break;
                        default:
                            resultText.innerText = "you tie";
                            break;
                    }
                    break;
                
                case lizard:
                    switch(housePickImage.src) {
                        case rock:
                        case scissors:
                            resultText.innerText = "you lose";
                            break;
                        case spock:
                        case paper:
                            resultText.innerText = "you win";
                            break;
                        default:
                            resultText.innerText = "you tie";
                            break;
                    }
                    break;
                
                case spock:
                    switch(housePickImage.src) {
                        case lizard:
                        case paper:
                            resultText.innerText = "you lose";
                            break;
                        case scissors:
                        case rock:
                            resultText.innerText = "you win";
                            break;
                        default:
                            resultText.innerText = "you tie";
                            break;
                    }
                    break;
                }
        resultGame.style.display = "block";
        //Set Score Number
        switch (resultText.textContent) {
            case "you win":
                user.classList.add("win");
                scoreNumber.innerText++;
                sessionStorage.setItem("score", scoreNumber.innerText);
                document.querySelector(".success").play();
                break;
            case "you lose":
                house.classList.add("win");
                scoreNumber.innerText--;
                sessionStorage.setItem("score", scoreNumber.innerText);
                document.querySelector(".fail").play();
                break;
            default:
                user.classList.add("win");
                house.classList.add("win");
                document.querySelector(".tie").play();
                break;
        }
        }, 3000);
    })
});

//Replay Game
playAgainButton.addEventListener("click", () => {
    document.querySelector(".click").play();
    stratGame.style.display = "flex";
    gameResult.style.display = "none";
    housePick.style.display = "none";
    housePickOverlay.style.display = "block";
    resultGame.style.display = "none";
    user.classList.remove("win");
    house.classList.remove("win");
});
/*---------------------------- End Game  ---------------------------------*/

/*---------------------------- Start Show and Hide Image Rules -------------------------*/
//Variables
let verLay = document.querySelector(".game .overlay");
let rulesImage = document.querySelector(".game .image-rules");
let rulesButton = document.querySelector(".rules");
let hideImageRules = document.querySelector(".game .image-rules button");
let gameBody = document.querySelector(".game .game-body");
//Show Image Rules
rulesButton.addEventListener("click", () => {
    document.querySelector(".click").play();
    buttonRulesControl('block', '0', 'block');
});
//Hide Image Rules
hideImageRules.addEventListener("click", () => {
    document.querySelector(".click").play();
    buttonRulesControl('none', '1', 'none');
});
//Control Image Rules Function
function buttonRulesControl(x,y,z) {
    rulesImage.style.display = x;
    gameBody.style.opacity = y;
    verLay.style.display = z;
};
/*---------------------------- End Show and Hide Image Rules -------------------------*/
