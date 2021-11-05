
export function setLocalStorage(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("products") || "[]");
}

