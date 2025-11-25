let inp = document.querySelector("#text-input");
let result = document.querySelector("span");
let max = 20;
inp.addEventListener("input", (e) => {
    let len = e.target.value.length;
    let charleft = max - len;
    if (charleft < 0) {
        result.innerText = charleft;
        result.style.color = "red";
    }
    else {
        result.innerText = charleft;
        result.style.color = "black";
    }
})