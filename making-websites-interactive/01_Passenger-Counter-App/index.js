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
    const counter = document.getElementById("count-el");
    const counterCurrentValue = counter.innerText;
    document.getElementById("count-el").innerText = "";
    counter.innerText += (parseInt(counterCurrentValue) + parseInt("1"));

}