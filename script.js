function activateNoButton() {
    const noBtn = document.getElementById("noBtn");

    if (!noBtn) return;

    noBtn.onmouseover = function () {

        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    };
}
