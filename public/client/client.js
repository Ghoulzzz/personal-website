function darkMode() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.color = "black";
        document.getElementById("nightmodebutton").innerText = "🌙";
        document.getElementById("preview_image").style.borderColor = "black";
        return document.body.style.backgroundColor = "white";
    }
    document.body.style.color = "white";
    document.getElementById("nightmodebutton").innerText = "☀️";
    document.getElementById("preview_image").style.borderColor = "white";
    return document.body.style.backgroundColor = "black";
}
