let countHome = 0;
let countGuest = 0;
let homeDisplay = "";
let guestDisplay = "";
homeDisplay = document.getElementById("homeDisplay");
guestDisplay = document.getElementById("guestDisplay"); // returns live element, so is okay to be stored only once



// function getLeader(countHome, countGuest) {
//     return (countHome > countGuest) ? "home" : "guest";   
// }

let leader = function getLeader(countHome, countGuest) {
    return (countHome > countGuest) ? "home" : "guest";
};

// let countEl = document.getElementById("count-el");
// let totalEl = document.getElementById("total");
// let savedEl = document.getElementById("saved");

// let countElBase = countEl.textContent;
// let totalElBase = totalEl.textContent;
// let savedElBase = savedEl.textContent;
function plus1H() {
    countHome++;
    homeDisplay.textContent = `${countHome}`;
}

function plus2H() {
    countHome+=2;
    homeDisplay.textContent = `${countHome}`;
}

function plus3H() {
    countHome+=3;
    homeDisplay.textContent = `${countHome}`;
}

function plus1G() {
    countGuest++;
    guestDisplay.textContent = `${countGuest}`;
}

function plus2G() {
    countGuest+=2;
    guestDisplay.textContent = `${countGuest}`;
}

function plus3G() {
    countGuest+=3;
    guestDisplay.textContent = `${countGuest}`;
}

(() => {
    
    
    const displayIncrements = document.getElementsByClassName("display__increment");
    let functions = [plus1H, plus2H, plus3H, plus1G, plus2G, plus3G];
    if ((typeof(displayIncrements) === "object") && (displayIncrements.length === 6)) { // check that array is proper type and of length 6
        for (let index = 0; index < displayIncrements.length; index++) {
            const element = displayIncrements[index];
            if(typeof(element) !== "undefined") { // check that each var has been assigned a value
                element.addEventListener("click", functions[index])
                console.log("success")
            }
        }
    }

    document.getElementById("newgame").addEventListener("click", restart);
    

})();



// function increment() {
//     count+=1;
//     countEl.textContent = count;
// }

// function save() {

    
    

//     // If there is a dot, it's removed
//     if (savedEl.textContent.endsWith(".")) {
//         savedEl.textContent = savedEl.textContent.slice(0, -1);
//     }


    
    
//     // Checking that save button wasn't cliked yet, so different display method is used
//     const savedSplit = savedEl.textContent.split("");
//     // [2] because this is where number start to appear

//     // for each elements of array
//     // if there is number
//     // true
//     let decision = false;
//     for (const element of savedSplit) {
//         if (parseInt(element)) { // ???
//             decision = true;
//             break;
//         }
//     }

//     if (decision === true) {
//         savedEl.textContent += `, €${count}.`;
//     }
//     else {
//         savedEl.textContent += ` €${count}.`;
//     }


//     // After Saving — Clear the Counter
//     // To start all over again
//     // and update the total
//     total += count;
//     totalEl.textContent = `Total: €${total}`;

//     count = 0;
//     countEl.textContent = count;
    
// }

function restart() {
    countHome = 0;
    countGuest = 0;
    homeDisplay.textContent = "0";
    guestDisplay.textContent = "0";
}
