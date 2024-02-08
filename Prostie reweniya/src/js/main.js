"use strict"

// Рандомное появление видео на главной странице

const heroWrapperVideo = document.querySelector(".hero__wrapper-video");

const heroVideo = document.querySelectorAll(".hero__video");

const massiveVideo = [0, 1];

if (heroWrapperVideo) {

  const randomVideoNum = Math.round(Math.random() * 1);
  const randomVideo = massiveVideo[randomVideoNum];

  heroVideo.forEach(function (herovideo, i) {
    if (i === randomVideo) {
      herovideo.style.display = "block";
      herovideo.play();
    }
  })
}

window.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
  --include("./modules/document.js")
};