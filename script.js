const introScreen = document.getElementById("introScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const messageScreen = document.getElementById("messageScreen");
const finalScreen = document.getElementById("finalScreen");

const startButton = document.getElementById("startButton");
const messageButton = document.getElementById("messageButton");
const giftButton = document.getElementById("giftButton");

const confettiContainer =
    document.getElementById("confettiContainer");


/* =========================
   SCREEN TRANSITION
========================= */

function showScreen(currentScreen, nextScreen) {

    currentScreen.classList.add("hidden");

    setTimeout(() => {
        nextScreen.classList.remove("hidden");
    }, 350);
}


/* =========================
   START
========================= */

startButton.addEventListener("click", () => {

    showScreen(
        introScreen,
        birthdayScreen
    );

});


/* =========================
   MESSAGE
========================= */

messageButton.addEventListener("click", () => {

    showScreen(
        birthdayScreen,
        messageScreen
    );

});


/* =========================
   FINAL GIFT
========================= */

giftButton.addEventListener("click", () => {

    showScreen(
        messageScreen,
        finalScreen
    );

    createConfetti();

});


/* =========================
   CONFETTI ENGINE
========================= */

function createConfetti() {

    const pieces = 100;

    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(confetti);


        setTimeout(() => {
            confetti.remove();
        }, 4000);

    }

}