const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const NoBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yeyy asikkk";
    gif.src =
        "https://giphy.com/gifs/play-chick-tube-1JXE6fSDYeCAnm96gH";
});

NoBtn.addEventListener("click", () => {
    question.innerHTML = "Yaahhh kenapaa :(";
    gif.src =
        "https://giphy.com/gifs/tired-beat-chick-Ldu0VTLURGJ5O2o9Rw";
});