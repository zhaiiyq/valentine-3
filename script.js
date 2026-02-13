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

/* 👇 ДОБАВЬ ВОТ ЭТО ВНИЗ */

document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.querySelector(".buttons button:nth-child(2)");

    if (noBtn) {
        noBtn.addEventListener("mouseover", function() {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
