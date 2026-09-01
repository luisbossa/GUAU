const menu = `
<div class="menu-header">
    <p class="menu-title">Menú</p>

    <div class="close-panel menu-close" role="button" tabindex="0" aria-label="Cerrar menú">
        <svg class="menu-close-icon" width="41" height="41" viewBox="0 0 41 41" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="41" height="41" rx="10" fill="black" />
            <rect x="25.9004" y="16.25" width="14" height="1.2" transform="rotate(135 25.9004 16.25)"
                fill="#F6F5F0" />
            <rect x="24.9004" y="26.25" width="14" height="1.2" transform="rotate(-135 24.9004 26.25)"
                fill="#F6F5F0" />
        </svg>
    </div>
</div>

<div class="menu-navigation">
    <a class="menu-link" href="/pages/all-items.html">Todo</a>
    <a class="menu-link" href="/pages/accessories">Accesorios</a>
    <a class="menu-link" href="/pages/bundle-save">Paquete y Ahorro</a>
    <a class="menu-link" href="/pages/collar">Collares</a>
    <a class="menu-link" href="/pages/harness">Arneses</a>
    <a class="menu-link" href="/pages/leash">Correas</a>
</div>

<div class="menu-info">
    <a class="menu-link" href="/pages/about">Información</a>
</div>
`;

document.getElementById("menu-content").innerHTML = menu;
