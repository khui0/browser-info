document.body.style.fontFamily = "monospace";

update();
document.addEventListener("click", update);
window.addEventListener("resize", update);
setInterval(update, 1000);

function update() {
    document.getElementById("results")?.remove();
    const data = [
        new Date(),
        navigator.userAgent,
        `Screen: ${window.screen.width}, ${window.screen.width}`,
        `Viewport: ${window.innerWidth}, ${window.innerHeight}`,
        document.documentElement.outerHTML,
    ]
    const text = document.createElement("p");
    text.id = "results";
    text.style.whiteSpace = "pre";
    text.textContent = data.join("\n\n");
    document.body.append(text);
}