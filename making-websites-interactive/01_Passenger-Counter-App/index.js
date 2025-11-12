let count = 0;
let countEl = document.getElementById("count-el");

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

})();

function increment() {
    count+=1;
    countEl.textContent = count;
}

function save() {

    
    let saved = document.getElementById("saved");
    console.log(saved.textContent);

    // If there is a dot, it's removed
    if (saved.textContent.endsWith(".")) {
        saved.textContent = saved.textContent.slice(0, -1);
    }


    
    
    // Checking that save button wasn't cliked yet, so different display method is used
    const savedSplit = saved.textContent.split(" ");
    // [2] because this is where number start to appear
    if (!(parseInt(savedSplit[2]))) {
        
        saved.textContent += ` ${count}.`;
        
    } 
    else {
        saved.textContent += `, ${count}.`;
    }

    // After Saving — Clear the Counter
    // To start all over again
    count = 0;
    countEl.textContent = count;
    
}