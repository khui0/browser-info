document.body.style.fontFamily = "monospace";

update();
window.addEventListener("resize", update);
setInterval(update, 1000);

document.addEventListener("click", e => {
    // navigator.clipboard.writeText(getText());
    document.querySelectorAll("script~:not(script)").forEach(element => {
        element.remove();
    });
    update();
});

function update() {
    document.getElementById("results")?.remove();
    const text = document.createElement("p");
    text.id = "results";
    text.style.whiteSpace = "pre";
    text.textContent = getText();
    document.body.append(text);
}

function getText() {
    const data = [
        new Date(),
        navigator.userAgent,
        `Screen: ${window.screen.width}, ${window.screen.height}`,
        `Viewport: ${window.innerWidth}, ${window.innerHeight}`,
        document.documentElement.outerHTML,
    ]
    return data.join("\n\n");
}