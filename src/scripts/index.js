"use strict";
import { startSlider } from "./components/slider.js";
import { createCard } from "./components/card.js";
import { renderProducts,countProductInCard } from "./components/utils.js";
import { getDataServer } from "./components/server.js";
import { onBtnClick, } from "./components/event-handler.js";

document.addEventListener("DOMContentLoaded", app);
document.addEventListener("click", onBtnClick);

function app() {
  startSlider();
  getDataServer().then((data) => renderProducts(data, "cards", createCard));
  countProductInCard()
}


























// const SERVER_DATA = "https://6173b59d110a7400172230d3.mockapi.io/sneakers/"

//     async function first (id){
//         let result = await fetch(SERVER_DATA + id)
//         return result.json()
//     }
//     async function second (id){
//         let result = await fetch(SERVER_DATA + id)
//         return result.json()
//     }
//     async function third (id) {
//         let result = await fetch(SERVER_DATA + id)
//         return result.json()
//     }

// async function start (){
//  third(3)
//  first(1)
//  second(2)
// }

// start()


