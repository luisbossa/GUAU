document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    if (link.target === "_blank") return;

    const href = link.getAttribute("href");

    if (!href) return;
    if (href.startsWith("#")) return;
    if (href.startsWith("javascript:")) return;
    if (link.hasAttribute("download")) return;

    const url = new URL(href, window.location.href);

    if (url.origin !== window.location.origin) return;

    if (
      url.pathname === window.location.pathname &&
      url.search === window.location.search &&
      url.hash === window.location.hash
    ) {
      return;
    }

    event.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(() => {
      window.location.href = url.href;
    }, 500);
  });
});
