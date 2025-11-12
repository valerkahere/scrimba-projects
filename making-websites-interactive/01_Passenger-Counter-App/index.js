let count = 0;
let total = 0;

let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total");
let savedEl = document.getElementById("saved");

let countElBase = countEl.textContent;
let totalElBase = totalEl.textContent;
let savedElBase = savedEl.textContent;

(() => {
    

    const incrementBtn = document.getElementById("increment-btn");
    // If the element not null, the if statement will be executed
    if (incrementBtn) {
        incrementBtn.addEventListener("click", increment)
    }

    const saveBtn = document.getElementById("save-btn");
    if (saveBtn) {
        saveBtn.addEventListener("click", save)
    }

    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", restart)
    }

})();

function increment() {
    count+=1;
    countEl.textContent = count;
}

function save() {

    
    

    // If there is a dot, it's removed
    if (savedEl.textContent.endsWith(".")) {
        savedEl.textContent = savedEl.textContent.slice(0, -1);
    }


    
    
    // Checking that save button wasn't cliked yet, so different display method is used
    const savedSplit = savedEl.textContent.split("");
    // [2] because this is where number start to appear

    // for each elements of array
    // if there is number
    // true
    let decision = false;
    for (const element of savedSplit) {
        if (parseInt(element)) { // ???
            decision = true;
            break;
        }
    }

    if (decision === true) {
        savedEl.textContent += `, €${count}.`;
    }
    else {
        savedEl.textContent += ` €${count}.`;
    }


    // After Saving — Clear the Counter
    // To start all over again
    // and update the total
    total += count;
    totalEl.textContent = `Total: €${total}`;

    count = 0;
    countEl.textContent = count;
    
}

function restart() {
    countEl.textContent = countElBase;
    totalEl.textContent = totalElBase;
    savedEl.textContent = savedElBase;
}