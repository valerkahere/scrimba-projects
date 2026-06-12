let countHome = 0;
let countGuest = 0;
let homeDisplay = "";
let guestDisplay = "";
homeDisplay = document.getElementById("homeDisplay");
guestDisplay = document.getElementById("guestDisplay"); // returns live element, so is okay to be stored only once
let displaysBGs = document.getElementsByClassName("display__counter");
let homeDisplayBG = "";
let guestDisplayBG = ""; 
if (displaysBGs) {
    homeDisplayBG = displaysBGs[0];
    guestDisplayBG = displaysBGs[1];
}

function getLeader(countHome, countGuest) {
    let leader = (countHome > countGuest) ? "home" : "guest";
    let equal = (countHome === countGuest);

    if (leader === "home") {
        // add border to display counter with transition
        // element.classList.add("")
        guestDisplayBG.classList.remove("leader");
        homeDisplayBG.classList.add("leader");
    }
    else if (equal) {
        homeDisplayBG.classList.add("leader");
        guestDisplayBG.classList.add("leader");
    }
    else {
        homeDisplayBG.classList.remove("leader");
        guestDisplayBG.classList.add("leader");
    }
};

function plus1H() {
    countHome++;
    homeDisplay.textContent = `${countHome}`;
    getLeader(countHome, countGuest);

    
}

function plus2H() {
    countHome+=2;
    homeDisplay.textContent = `${countHome}`;
    getLeader(countHome, countGuest);
}

function plus3H() {
    countHome+=3;
    homeDisplay.textContent = `${countHome}`;
    getLeader(countHome, countGuest);
}

function plus1G() {
    countGuest++;
    guestDisplay.textContent = `${countGuest}`;
    getLeader(countHome, countGuest);
}

function plus2G() {
    countGuest+=2;
    guestDisplay.textContent = `${countGuest}`;
    getLeader(countHome, countGuest);
}

function plus3G() {
    countGuest+=3;
    guestDisplay.textContent = `${countGuest}`;
    getLeader(countHome, countGuest);
}


function restart() {
    guestDisplayBG.classList.remove("leader");
    homeDisplayBG.classList.remove("leader");
    countHome = 0;
    countGuest = 0;
    homeDisplay.textContent = "0";
    guestDisplay.textContent = "0";
}

(() => {
    restart();
    
    const displayIncrements = document.getElementsByClassName("display__increment");
    let functions = [plus1H, plus2H, plus3H, plus1G, plus2G, plus3G];
    if ((typeof(displayIncrements) === "object") && (displayIncrements.length === 6)) { // check that array is proper type and of length 6
        for (let index = 0; index < displayIncrements.length; index++) {
            const element = displayIncrements[index];
            if(typeof(element) !== "undefined") { // check that each var has been assigned a value
                element.addEventListener("click", functions[index])
            }
        }
    }

    document.getElementById("newgame").addEventListener("click", restart);
    

})();
