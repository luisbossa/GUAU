const cart = `
<div class="cart-panel__content">
    <div class="cart-panel__inner">

        <!-- Cart header -->
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

        <!-- Empty cart -->
        <div class="cart-panel__empty empty-state">
            <p class="cart-panel__empty-message">
                Tu carrito está vacío
            </p>

            <div class="cart-panel__footer">
                <a href="/pages/all" class="cart-panel__shop-button">
                    Explorar productos
                </a>
            </div>
        </div>

    </div>
</div>
`;

document.getElementById("mini-cart").innerHTML = cart;
