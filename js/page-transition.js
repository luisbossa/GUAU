document.addEventListener("DOMContentLoaded", () => {
  // Entrada de la página
  document.body.classList.add("page-enter");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove("page-enter");
    });
  });

  // Interceptar enlaces internos
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    // No interferir con Ctrl + click, Cmd + click, etc.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    // No interferir con target="_blank"
    if (link.target === "_blank") {
      return;
    }

    const href = link.getAttribute("href");

    // Ignorar enlaces sin destino
    if (!href) return;

    // Ignorar anchors
    if (href.startsWith("#")) return;

    // Ignorar javascript:
    if (href.startsWith("javascript:")) return;

    // Ignorar descargas
    if (link.hasAttribute("download")) return;

    // Crear URL absoluta
    const url = new URL(href, window.location.href);

    // Solo páginas del mismo dominio
    if (url.origin !== window.location.origin) {
      return;
    }

    // Si es exactamente la página actual
    if (url.href === window.location.href) {
      return;
    }

    event.preventDefault();

    // Animación de salida
    document.body.classList.add("page-leaving");

    // Esperar a que termine la animación
    setTimeout(() => {
      window.location.href = url.href;
    }, 400);
  });
});
