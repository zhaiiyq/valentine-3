function openEnvelope() {
    document.getElementById("scene1").classList.remove("active");
    document.getElementById("scene2").classList.add("active");

    setTimeout(() => {
        activateNoButton();
    }, 100);
}

function noAnswer() {
    document.getElementById("scene2").classList.remove("active");
    document.getElementById("scene3").classList.add("active");
}

function yesAnswer() {
    document.getElementById("scene2").classList.remove("active");
    document.getElementById("scene4").classList.add("active");
}

function backToQuestion() {
    document.getElementById("scene3").classList.remove("active");
    document.getElementById("scene2").classList.add("active");

    setTimeout(() => {
        activateNoButton();
    }, 100);
}

/* 🔥 КНОПКА БЕГАЕТ ПО ВСЕМУ ЭКРАНУ */
function activateNoButton() {
    const noBtn = document.getElementById("noBtn");

    if (!noBtn) return; // 💡 защита от ошибки

    noBtn.style.position = "fixed";

    noBtn.onmouseover = function () {

        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    };
}

function openStory(num) {
    document.getElementById("scene5").classList.remove("active");
    document.getElementById("story" + num).classList.add("active");
}

function backToHearts() {
    document.querySelectorAll(".scene").forEach(scene =>
        scene.classList.remove("active")
    );
    document.getElementById("scene4").classList.add("active");
}

function goToHearts() {
    document.getElementById("scene4").classList.remove("active");
    document.getElementById("scene5").classList.add("active");
}
