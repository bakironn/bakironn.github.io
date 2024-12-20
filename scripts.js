let image = document.getElementById("largerImage");

image.onmousedown = larger;
image.onmouseup = back;

function larger() {
    image.style.transform = "scale(2, 2)";
}

function back() {
    image.style.transform = "scale(1, 1)";
}
