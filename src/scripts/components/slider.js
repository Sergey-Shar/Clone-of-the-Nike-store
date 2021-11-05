import {delayText } from "./utils.js";
const app = document.querySelector(".app")
const covid = document.querySelector(".covid")
const refund = document.querySelector(".refund")

function slider() {
    delayText(app, "app-show", "app-hidden", 0, 3000, 3000, 4000)
    delayText(covid, "covid-show", "covid-hidden", 5000, 3000, 3000, 4000)
    delayText(refund, "refund-show", "refund-hidden", 9000, 3000, 3000, 4000)
}

export function startSlider() {
    slider()
    setInterval(slider, 13000);
}
