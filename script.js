"use strict";
document.addEventListener("DOMContentLoaded", start);

let frontRight;
let frontLeft;
let pad;
let lacesRight;
let lacesLeft;
let inside;
let logo;

async function start() {
  let response = await fetch("white-shoes-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  frontRight = document.querySelector("#front-right path ");
  frontLeft = document.querySelector("#front-left path ");
  pad = document.querySelector("#pad path ");
  lacesRight = document.querySelector("#laces-right path ");
  lacesLeft = document.querySelector("#laces-left path ");
  inside = document.querySelector("#inside path ");
  logo = document.querySelector("#logo path ");

  manipulateSvg();
}
let currentColor = "blue";

function setColor(part, colorFill) {
  //   console.log(part);
  part.style.fill = colorFill;
  part.classList.add("opacity");
}

function manipulateSvg() {
  setColor(frontRight, currentColor);
  setColor(frontLeft, currentColor);

  setColor(pad, currentColor);
  setColor(lacesRight, currentColor);
  setColor(lacesLeft, currentColor);

  setColor(inside, currentColor);
  setColor(logo, currentColor);

  frontRight.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  frontLeft.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  pad.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  lacesRight.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  lacesLeft.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  inside.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  logo.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });

  document.querySelectorAll("circle").forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
      currentColor = event.target.style.fill;
      console.log(currentColor);
    });
  });
}
