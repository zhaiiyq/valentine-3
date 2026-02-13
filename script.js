function activateNoButton() {
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".buttons");

    container.style.position = "relative";
    noBtn.style.position = "absolute";

    noBtn.addEventListener("mouseover", function () {

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const maxX = containerWidth - btnWidth;
        const maxY = containerHeight - btnHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
}
