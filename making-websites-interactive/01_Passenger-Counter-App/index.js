let count = 0;
let countEl = document.getElementById("count-el");

(() => {
    // On page reload, reset the value
    document.getElementById("count-el").innerText = 0;
    

    const btn = document.getElementById("increment-btn");
    // If the element not null, the if statement will be executed
    if (btn) {
        btn.addEventListener("click", Increment)
    }

})();

function Increment(event) {
    count+=1;
    countEl.innerText = count;
}