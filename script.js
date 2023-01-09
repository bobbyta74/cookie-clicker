const cookie = document.querySelector("#cookie");
const grandma = document.querySelector("#grandma");
const score = document.querySelector("h3");
let cookies = 0;

function addCookies(num) {
    cookies += num;
    if (cookies >= 50) {
        grandma.style.display = "inline";
    }
    score.textContent = "Score: " + String(cookies);
}

cookie.addEventListener("click", function() {
    addCookies(1);
});

grandma.addEventListener("click", function() {
    addCookies(5);
});