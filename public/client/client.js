function darkMode() {
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("nightmodebutton").innerText = "🌙";
        document.body.style.color = "black";
        return document.body.style.backgroundColor = "white";
    }
    document.getElementById("nightmodebutton").innerText = "☀️";
    document.body.style.color = "white";
    return document.body.style.backgroundColor = "black";
}