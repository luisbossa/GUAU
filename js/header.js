document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll("[data-trigger]");
  const panels = document.querySelectorAll(".panel");
  const overlay = document.querySelector(".panel-overlay");
  const closeButtons = document.querySelectorAll(".close-panel");

  // *==========================================*
  // *ABRIR PANEL*
  // *==========================================*

  function openPanel(panel) {
    if (!panel) return;

    // *Abrir panel*
    panel.classList.add("active");

    // *Mostrar overlay*
    if (overlay) {
      overlay.classList.add("active");
    }

    // *Bloquear scroll del body*
    document.body.classList.add("panel-open");
  }

  // *==========================================*
  // *CERRAR TODOS LOS PANELES*
  // *==========================================*

  function closePanels() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    if (overlay) {
      overlay.classList.remove("active");
    }

    document.body.classList.remove("panel-open");
  }

  // *==========================================*
  // *TRIGGERS*
  // *==========================================*

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.dataset.trigger;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      const isOpen = panel.classList.contains("active");

      // *Primero cerrar todo*
      closePanels();

      // *Si estaba cerrado, abrirlo*
      if (!isOpen) {
        openPanel(panel);
      }
    });

    // *==========================================*
    // *ACCESIBILIDAD: ENTER / SPACE*
    // *==========================================*

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        trigger.click();
      }
    });
  });

  // *==========================================*
  // *BOTONES DE CERRAR*
  // *==========================================*

  closeButtons.forEach((button) => {
    button.addEventListener("click", closePanels);
  });

  // *==========================================*
  // *CERRAR AL HACER CLICK EN OVERLAY*
  // *==========================================*

  if (overlay) {
    overlay.addEventListener("click", closePanels);
  }

  // *==========================================*
  // *CERRAR CON ESCAPE*
  // *==========================================*

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanels();
    }
  });
});