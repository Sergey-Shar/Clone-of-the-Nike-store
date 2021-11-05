import {DATA} from "./constant-data.js";

export function createCard(products) {
  return `<div class="col" id="${products.id || Math.random() * 10}">
        <div class="card">
                <img src="${products.img || DATA.URL_IMG}" alt="${products.model}" class="card-img-top" data-btn="showProduct" data-id="${products.id}" >
                <div class="card-body">
                <h5 class="card-title">${products.model || " "}</h5>
                <a  class="btn btn-primary" data-btn="showProduct" data-id="${products.id}">Купить</a>
                </div>
            </div>
            </div>`;
}


