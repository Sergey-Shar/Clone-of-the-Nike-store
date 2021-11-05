
import {Popup} from "./popup.js";
import {getDataServer} from "./server.js";
import {getLocalStorage} from "./local-storage.js";

export function renderProducts(arr, className, createItem) {
  const cards = arr.map(createItem);
  document.getElementById(className).innerHTML = cards;
}

export function renderPopup(id) {
  getDataServer().then((data) => {
    const content = data.find((item) => parseInt(item.id) === id);
    new Popup(content).open();
  });
}

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

export function addClass(component, className) {
  component.classList.add(className)
}

export function removeClass(component, className) {
  component.classList.remove(className)
}

export function delayText(component, show, hidden, firstDelay, secondDelay, thirdDelay, fourthDelay) {
  delay(firstDelay).then(() => {
    addClass(component, show)
    delay(secondDelay).then(() => removeClass(component, show))
    delay(thirdDelay).then(() => addClass(component, hidden))
    delay(fourthDelay).then(() => removeClass(component, hidden))
  })
}

export function countProductInCard() {
  document.querySelector(".cart__counter").innerText = getLocalStorage().length
}

export function innerHtml(node, element) {
  node.innerHTML = element
}

export function countPrice() {
  const count = getLocalStorage()
  const sum = count.map(item => parseInt(item.price))
  let result = sum.reduce((i, curent) => i + curent, 0)
  return result
}

export function renderTotalAmount(slector, totalSum, urlPng) {
  document.querySelector(slector).innerHTML = `${"Всего"}  ${totalSum} <img src=${urlPng}/>`
}

export function classToggle(node, className) {
  document.querySelector(node).classList.toggle(className)
}







