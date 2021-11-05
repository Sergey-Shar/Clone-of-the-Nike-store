import {DATA} from "./constant-data.js";
import {delay,countProductInCard} from "./utils.js";
import { postDataServer } from "./server.js";
import { getLocalStorage, setLocalStorage } from "./local-storage.js";

export class Popup {
    constructor(options) {
        this.options = options
        this.popup = null
        this.select = null
        this.btn = null
        this.closed = false
    }

    create() {
        return `<div class="popup">
        <div class="popup__overlay"  data-btn="close">
        <div class="popup__body">
        <img class="popup__img" src="${this.options.img || DATA.URL_IMG}">
        <div class="popup__content">
        <span class="popup__close" data-btn="close" >&times;</span>
        <h2 class="popup__title">${this.options.title || "Кроссовки Nike"}</h2>
        <h4 class="popup__model">${this.options.model || " "}</h4>
        <select class="popup__size"  data-popup="cart">
        <option selected >Выбрать размер</option>
        </select>
        <span class="popup__price">${this.options.price  || " "}<img src=${DATA.URL_PNG_RUBLE}/></span>
        <a  class="btn btn-primary btn-lg disabled" id="btn" role="button" aria-disabled="true" data-btn="submit">Добавить в корзину</a>
        </div>
        </div>    
        </div>
        </div>`
    }

    addToHtml() {
        !this.closed && document.body.insertAdjacentHTML("beforeend", this.create());
        this.popup = document.querySelector(".popup")
        this.select = this.popup.querySelector(".popup__size")
        this.btn = document.getElementById("btn")
    }

    addListener() {
        this.popup.addEventListener("click", (event) => this.onClickClose(event))
        this.select.addEventListener("change", () => this.addToCart())
    }

    onClickClose(e) {
        let dataType = e.target.dataset.btn
        if (dataType === "close") {
            this.close()
        } else if (dataType === "submit") {
            const productCart = this.createProductObj()
            this.btn.disabled = true
            postDataServer(productCart)
                .then(() => {
                    btn.setAttribute("data-btn", "showCart")
                    this.btn.innerText = "Перейти в корзину?"
                })
                .then(() => {
                    const data = getLocalStorage()
                    data.push(productCart)
                    setLocalStorage(data)
                })
                .then(countProductInCard)
        } else if (dataType === "showCart") {
            this.close()
        }
    }

    open() {
        this.addToHtml()
        this.addListener()
        this.addOptionSize()
        delay(500).then(() => !this.closed && this.popup.classList.add("open"))
        this.closeded = true
    }

    close() {
        this.popup.classList.remove("open");
        this.destroy()
    }

    destroy() {
        delay(600).then(() => {
            this.popup.parentNode.removeChild(this.popup)
            this.popup.removeEventListener("click", (event) => this.onClickClose(event))
        })
        this.closed = false
    }

    addOptionSize() {
        this.options.size.allSize.forEach(i => this.createSelect(i, "option"))
    }

    createSelect(i, className) {
        const option = document.createElement(className)
        option.textContent = i
        this.select.append(option)
    }

    addToCart() {
        if (this.select !== "Выбрать размер") {
            this.btn.classList.toggle("disabled")
            this.select.disabled = true
        }
    }

    createProductObj() {
        const productCart = {
            id: Math.floor(Math.random() * 300),
            title: "Кроссовки Nike",
            model: this.options.model,
            size: this.select.value,
            price: this.options.price,
            img: this.options.img
        }
        return productCart
    }
}


export class PopupBurger extends Popup {
    create() {
        return `<div class="popup-burger">
    <div class="popup-burger__overlay" data-btn="close">
    <div class="popup-burger__body">
    <div class="popup-burger__content">
    <a href="#" class="header__menu-link">Новинки</a>
    <a href="#" class="header__menu-link">Мужчины</a>
    <a href="#" class="header__menu-link">Женщины</a>
    <a href="#" class="header__menu-link">Дети</a>
    <a href="#" class="header__menu-link">Распродажа</a>
    <a href="#" class="header__menu-link">Зимняя одежда</a>
    <a href="#" class="header__menu-link">Коллекции</a>
    <span class="popup-burger__close" data-btn="close" >&times;</span>
    </div>
    </div>    
    </div>
    </div>`;
    }

    addToHtml() {
        !this.closed &&
            document.body.insertAdjacentHTML("beforeend", this.create());
        this.popup = document.querySelector(".popup-burger");
    }

    open() {
        this.addToHtml();
        this.addListener();
        delay(500).then(() => !this.closed && this.popup.classList.add("open"));
        this.closeded = true;
        document.body.classList.add("overflow-hidden")
    }

    close() {
        super.close()
        document.body.classList.remove("overflow-hidden")
    }

    addListener() {
        this.popup.addEventListener("click", (event) => this.onClickClose(event));
    }
}