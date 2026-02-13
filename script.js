function openEnvelope() {
    document.getElementById("scene1").classList.remove("active");
    document.getElementById("scene2").classList.add("active");
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
}

/* 🔥 КНОПКА NO УБЕГАЕТ */

function moveNoButton(button) {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    button.style.position = "relative";
    button.style.transform = `translate(${x}px, ${y}px)`;
}
