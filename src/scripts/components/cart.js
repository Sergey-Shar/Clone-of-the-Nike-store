  
  export function createCart() {
    return `<div class="content-cart container-xl">
  <div class="cart">
      <div class="cart__title">Корзина</div>
      <div id="cart__products"></div>
   </div>
  <div class="order">
      <div class="order__title">Сведенья</div>
      <div class="order__result"></div>
      <button class="order__finich">Оформить заказ</button>
      <button class="order__pay"><img src="https://img.icons8.com/color/48/000000/paypal.png"/></button>
  </div>
  </div>`;
  }

  export function addProduct(product) {
    return `<div class="card" style="width: 18rem;">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.model}</h5>
    <a class="btn btn-secondary" data-btn="delete" data-id="${product.id}">Удалить</a>
  </div>
</div>`;
  }

