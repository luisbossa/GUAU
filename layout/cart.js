const CART_STORAGE_KEY = "guauCart";

let cartItems = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

const cart = `
<div class="cart-panel__content">
    <div class="cart-panel__inner">

        <div class="cart-panel__header">
            <p class="cart-panel__title">
                Carrito (<span id="cart-count">0</span>)
            </p>

            <button type="button" class="close-panel menu-close" aria-label="Cerrar carrito">
                <svg class="menu-close-icon" width="41" height="41" viewBox="0 0 41 41" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="41" height="41" rx="10" fill="black" />
                    <rect x="25.9004" y="16.25" width="14" height="1.2" transform="rotate(135 25.9004 16.25)"
                        fill="#F6F5F0" />
                    <rect x="24.9004" y="26.25" width="14" height="1.2" transform="rotate(-135 24.9004 26.25)"
                        fill="#F6F5F0" />
                </svg>
            </button>
        </div>

        <div class="cart-panel__products" id="cart-products"></div>

        <div class="cart-panel__empty" id="cart-empty">
            <p class="cart-panel__empty-message">
                Tu carrito está vacío
            </p>

            <div class="cart-panel__footer">
                <a href="/pages/all" class="cart-panel__shop-button">
                    Explorar productos
                </a>
            </div>
        </div>

        <div class="cart-panel__summary" id="cart-summary">
            <div class="cart-panel__subtotal">
                <span>Subtotal</span>
                <strong id="cart-subtotal">₡0</strong>
            </div>

            <button type="button" class="cart-panel__checkout">
                Continuar compra
            </button>
        </div>

    </div>
</div>
`;

const miniCart = document.getElementById("mini-cart");
const panelOverlay = document.querySelector(".panel-overlay");

if (miniCart) {
  miniCart.innerHTML = cart;
}

const cartPanel = document.getElementById("mini-cart");
const cartProductsElement = document.getElementById("cart-products");
const cartEmptyElement = document.getElementById("cart-empty");
const cartSummaryElement = document.getElementById("cart-summary");
const cartCountElement = document.getElementById("cart-count");
const cartSubtotalElement = document.getElementById("cart-subtotal");
const cartCloseButton = cartPanel?.querySelector(".close-panel");

function formatPrice(price) {
  return `₡${price.toLocaleString("es-CR")}`;
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function getCartCount() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function openCart() {
  if (!cartPanel) {
    return;
  }

  cartPanel.classList.add("is-open");
  panelOverlay?.classList.add("is-visible");
}

function closeCart() {
  if (!cartPanel) {
    return;
  }

  cartPanel.classList.remove("is-open");
  panelOverlay?.classList.remove("is-visible");
}

function closeCart() {
  if (!cartPanel) {
    return;
  }

  cartPanel.classList.remove("is-open");
  panelOverlay?.classList.remove("is-visible");
  document.body.style.overflow = "";
}

function createCartItem(item, index) {
  const element = document.createElement("article");

  element.className = "cart-item";
  element.dataset.index = index;

  element.innerHTML = `
        <div class="cart-item__image">
            <img
                src="${item.image}"
                alt="${item.name}"
            >
        </div>

        <div class="cart-item__info">

            <div class="cart-item__top">
                <div>
                    <span class="cart-item__category">
                        GUAU COLLECTION
                    </span>

                    <h3 class="cart-item__name">
                        ${item.name}
                    </h3>
                </div>

                <button
                    type="button"
                    class="cart-item__remove"
                    data-action="remove"
                    aria-label="Eliminar ${item.name}"
                >
                    ×
                </button>
            </div>

            <div class="cart-item__variants">

                ${
                  item.size
                    ? `
                            <span class="cart-item__variant">
                                Talla: ${item.size}
                            </span>
                        `
                    : ""
                }

                ${
                  item.color
                    ? `
                            <span class="cart-item__variant">
                                Color: ${item.color}
                            </span>
                        `
                    : ""
                }

            </div>

            <div class="cart-item__bottom">

                <div class="cart-item__quantity">

                    <button
                        type="button"
                        data-action="decrease"
                        aria-label="Disminuir cantidad"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        data-action="increase"
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>

                </div>

                <strong class="cart-item__price">
                    ${formatPrice(item.price * item.quantity)}
                </strong>

            </div>

        </div>
    `;

  element
    .querySelector('[data-action="remove"]')
    .addEventListener("click", () => {
      removeCartItem(index);
    });

  element
    .querySelector('[data-action="decrease"]')
    .addEventListener("click", () => {
      decreaseCartItem(index);
    });

  element
    .querySelector('[data-action="increase"]')
    .addEventListener("click", () => {
      increaseCartItem(index);
    });

  return element;
}

function renderCart() {
  if (!cartProductsElement || !cartEmptyElement || !cartSummaryElement) {
    return;
  }

  cartProductsElement.innerHTML = "";

  if (cartItems.length === 0) {
    cartEmptyElement.style.display = "flex";
    cartSummaryElement.style.display = "none";
  } else {
    cartEmptyElement.style.display = "none";
    cartSummaryElement.style.display = "block";

    cartItems.forEach((item, index) => {
      const cartItem = createCartItem(item, index);
      cartProductsElement.appendChild(cartItem);
    });
  }

  updateCartTotals();
}

function updateCartTotals() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();

  if (cartCountElement) {
    cartCountElement.textContent = count;
  }

  if (cartSubtotalElement) {
    cartSubtotalElement.textContent = formatPrice(subtotal);
  }
}

function findCartItem(productId, size, colorId) {
  return cartItems.findIndex((item) => {
    return (
      item.productId === productId &&
      item.size === size &&
      item.colorId === colorId
    );
  });
}

function addToCart(item) {
  const existingIndex = findCartItem(item.productId, item.size, item.colorId);

  if (existingIndex !== -1) {
    cartItems[existingIndex].quantity += item.quantity;
  } else {
    cartItems.push({
      ...item,
      quantity: item.quantity || 1,
    });
  }

  saveCart();
  renderCart();
  openCart();
}

function removeCartItem(index) {
  if (index < 0 || index >= cartItems.length) {
    return;
  }

  cartItems.splice(index, 1);

  saveCart();
  renderCart();
}

function increaseCartItem(index) {
  if (!cartItems[index]) {
    return;
  }

  cartItems[index].quantity += 1;

  saveCart();
  renderCart();
}

function decreaseCartItem(index) {
  if (!cartItems[index]) {
    return;
  }

  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
  } else {
    cartItems.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function clearCart() {
  cartItems = [];

  saveCart();
  renderCart();
}

function getCartItems() {
  return [...cartItems];
}

cartCloseButton?.addEventListener("click", closeCart);

panelOverlay?.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

window.guauCart = {
  add: addToCart,
  remove: removeCartItem,
  increase: increaseCartItem,
  decrease: decreaseCartItem,
  clear: clearCart,
  getItems: getCartItems,
  getCount: getCartCount,
  getSubtotal: getCartSubtotal,
  open: openCart,
  close: closeCart,
  render: renderCart,
};

renderCart();
