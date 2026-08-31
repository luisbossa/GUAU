const footer = `
<div class="container">
    <div class="footer_inner">
        <div class="c-footer">
            <div class="layout">
                <div class="layout_item w-50">
                    <div class="newsletter">
                        <img class="footer-logo" src="/images/footer-logo.png" alt="Footer logo">
                    </div>
                </div>

                <div class="layout_item w-25">
                    <nav class="c-nav-tool">
                        <h4 class="c-nav-tool_title">Menú</h4>
                        <ul class="c-nav-tool_list">
                            <li>
                                <a href="/pages/all-items.html" class="c-link">Todo</a>
                            </li>
                            <li>
                                <a href="/pages/all" class="c-link">Accesorios</a>
                            </li>
                            <li>
                                <a href="/pages/about-us" class="c-link">Collares</a>
                            </li>
                            <li>
                                <a href="/blogs/community" class="c-link">Correas</a>
                            </li>
                            <li>
                                <a href="/pages/about-us" class="c-link">Acerca de</a>
                            </li>
                            <li>
                                <a href="/pages/community" class="c-link">Comunidad</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="layout_item w-25">
                    <nav class="c-nav-tool">
                        <h4 class="c-nav-tool_title">Soporte</h4>
                        <ul class="c-nav-tool_list">
                            <li class="c-nav-tool_item">
                                <a href="/pages/shipping-returns" class="c-link">Envíos &amp;
                                    devoluciones</a>
                            </li>
                            <li class="c-nav-tool_item">
                                <a href="/pages/terms-conditions" class="c-link">Terminos &amp;
                                    condiciones</a>
                            </li>
                            <li class="c-nav-tool_item">
                                <a href="/pages/privacy-policy" class="c-link">Política de privacidad</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="layout_item w-25">
                    <nav class="c-nav-tool">
                        <h4 class="c-nav-tool_title">Información</h4>
                        <ul class="c-nav-tool_list">
                            <li class="c-nav-tool_item">
                                <a href="#" class="c-link">Preguntas frecuentes</a>
                            </li>

                            <li class="c-nav-tool_item">
                                <a href="#" class="c-link">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="layout c-2">
                <div class="layout_item w-50">
                    <ul class="socials-div">
                        <li>
                            <img src="/images/svg/mastercard.svg" alt="Master Card">
                        </li>
                        <li>
                            <img src="/images/svg/visa.svg" alt="Visa">
                        </li>
                        <li>
                            <img src="/images/svg/paypal.svg" alt="Paypal">
                        </li>
                    </ul>
                </div>
                <div class="layout_item w-25">
                    <div class="footer_copyright">
                        <p>&copy; 2026 GUAU</p>
                    </div>

                </div>
                <div class="layout_item w-25"
                    style="display:flex;justify-content: end;align-items: center;">
                    <ul class="socials-div">
                        <li>
                            <a href="#">
                                <img class="footer-icon" src="/images/svg/facebook.svg" alt="Facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="footer-icon" src="/images/svg/insta.svg" alt="Instagram">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

document.getElementById("footer-div").innerHTML = footer;
