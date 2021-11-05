
import { DATA } from "./constant-data.js";
import { renderProducts } from "./utils.js";

export async function getDataServer() {
  const result = await fetch(DATA.URL_SERVER);
  if (result.ok) {
    return result.json();
  } else {
    renderProducts(DATA.DEFAULT_CARD);
    throw new Error("Network error");
  }
}

export async function postDataServer(product) {
  const data = await fetch(DATA.URL_FIRE_BASE, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "content-type": "application/json"
    }
  })
  const result = await data.json()
  return result
}




