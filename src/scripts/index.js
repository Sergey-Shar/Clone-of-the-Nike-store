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





























