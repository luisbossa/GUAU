const header = `
<div class="header-container">

    <a href="/" class="site-logo-link" aria-label="Ir al inicio">
        <h1 class="site-logo">
            <img class="site-logo-image" width="115" height="27" src="/images/logo.png" alt="Logo">
        </h1>
    </a>

    <nav class="header-actions" aria-label="Acciones principales">

        <div class="menu-wrapper menu-wrapper-navigation">
            <div class="menu-trigger" data-trigger="mini-cart" role="button" tabindex="0">
                <span class="header-span">
                    CARRITO
                </span>
            </div>
        </div>

        <div class="menu-wrapper menu-wrapper-navigation">
            <div class="menu-trigger" data-trigger="menu-content" role="button" tabindex="0">
                <span class="header-span">
                    MENÚ
                </span>
            </div>
        </div>
    </nav>
</div>
`;

document.getElementById("header-div").innerHTML = header;
