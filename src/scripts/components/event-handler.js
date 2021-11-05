
import { renderPopup, renderProducts,countPrice,innerHtml,countProductInCard, renderTotalAmount, classToggle } from "./utils.js";
import { getLocalStorage,setLocalStorage } from "./local-storage.js";
import { createCart,addProduct } from "./cart.js";
import {DATA} from "./constant-data.js";
import { PopupBurger } from "./popup.js";

const content = document.querySelector(".content");

export function onBtnClick(event) {
  const id = parseInt(event.target.dataset.id);
  const dataType = event.target.dataset.btn;
  switch (dataType) {
    case "showProduct":
      renderPopup(id);
      break;
    case "showCart":
      const data = getLocalStorage();
      innerHtml(content, "");
      innerHtml(content, createCart());
      renderProducts(data, "cart__products", addProduct);
      let sum = countPrice();
      renderTotalAmount(".order__result", sum, DATA.URL_PNG_RUBLE);
      break;
    case "reboot":
      document.location.reload()
      break;
    case "delete":
      const dataId = getLocalStorage().filter((item) => item.id != id);
      setLocalStorage(dataId);
      const newData = getLocalStorage();
      renderProducts(newData, "cart__products", addProduct);
      let sumNew = countPrice();
      renderTotalAmount(".order__result", sumNew, DATA.URL_PNG_RUBLE);
      countProductInCard();
      break;
    case "burger":
     new PopupBurger().open()
      break;
      case "footer-help":
        classToggle(".footer__link-help","open")
        classToggle(".help__container","open")
        classToggle(".open-list","open")
   break;
  case "footer-about":
    classToggle(".footer__link-about","open")
    classToggle(".about__container","open")
    classToggle(".open-list_a","open")
   }
}

