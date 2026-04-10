setInterval(c, 1000);

function c() {
    let time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = time;
}
