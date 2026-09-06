const productGridElement = document.getElementById("product-grid");

function formatPrice(price) {
  return `₡${price.toLocaleString("es-CR")}`;
}

function getColor(colors, colorId) {
  return colors.find((color) => color.id === colorId);
}

function setupTooltip(option, tooltip) {
  let closeTimeout;

  const openTooltip = () => {
    clearTimeout(closeTimeout);
    option.classList.add("active");
  };

  const closeTooltip = () => {
    closeTimeout = setTimeout(() => {
      option.classList.remove("active");
    }, 120);
  };

  option.addEventListener("mouseenter", openTooltip);
  option.addEventListener("mouseleave", closeTooltip);

  tooltip.addEventListener("mouseenter", openTooltip);
  tooltip.addEventListener("mouseleave", closeTooltip);

  option.addEventListener("click", (event) => {
    if (
      event.target === option ||
      event.target === option.querySelector(":scope > span")
    ) {
      option.classList.toggle("active");
    }
  });
}

function createProduct(product) {
  const productElement = document.createElement("li");

  productElement.className = "product-card";
  productElement.dataset.productId = product.id;

  const defaultColor = getColor(product.colors, product.defaultColor);

  productElement.innerHTML = `
    <div class="product-content">

      <div class="product-image">
        <div class="product-image-flip">
          <img
            class="product-image-main"
            src="${defaultColor?.image || product.image}"
            alt="${product.name}"
          >
        </div>
      </div>

      <ul class="product-options">

        <li class="product-option product-option-size">
          <span data-size="${product.defaultSize}">
            ${product.defaultSize}
          </span>

          <div class="product-option-tooltip product-size-tooltip">
            ${product.sizes
              .map(
                (size) => `
                  <span data-size="${size}">
                    ${size}
                  </span>
                `,
              )
              .join("")}
          </div>
        </li>

        <li class="product-option product-option-color">

          <span
            data-color="${product.defaultColor}"
            style="background-color: ${defaultColor?.value || "#d9d9d9"}"
            title="${defaultColor?.name || ""}"
          ></span>

          <div class="product-option-tooltip product-color-tooltip">
            ${product.colors
              .map(
                (color) => `
                  <span
                    data-color="${color.id}"
                    title="${color.name}"
                    style="background-color: ${color.value}"
                  ></span>
                `,
              )
              .join("")}
          </div>

        </li>

        <li class="product-option product-option-cart"></li>

      </ul>
    </div>

    <div class="product-info">
      <div class="product-info-main">

        <div class="product-info-details">
          <span class="product-category">
            GUAU COLLECTION
          </span>

          <h3 class="product-name">
            ${product.name}
          </h3>
        </div>

        <span class="product-price">
          ${formatPrice(product.price)}
        </span>

      </div>
    </div>
  `;

  const productImage = productElement.querySelector(".product-image-main");

  const colorOption = productElement.querySelector(".product-option-color");

  const colorCurrent = colorOption.querySelector(":scope > span");

  const colorTooltip = colorOption.querySelector(".product-color-tooltip");

  const colorOptions = colorOption.querySelectorAll(
    ".product-color-tooltip span",
  );

  colorOptions.forEach((colorElement) => {
    colorElement.addEventListener("click", (event) => {
      event.stopPropagation();

      const colorId = colorElement.dataset.color;
      const selectedColor = getColor(product.colors, colorId);

      if (!selectedColor) {
        return;
      }

      if (selectedColor.image) {
        productImage.src = selectedColor.image;
      }

      colorCurrent.dataset.color = selectedColor.id;
      colorCurrent.style.backgroundColor = selectedColor.value;
      colorCurrent.title = selectedColor.name;
    });
  });

  const sizeOption = productElement.querySelector(".product-option-size");

  const sizeCurrent = sizeOption.querySelector(":scope > span");

  const sizeTooltip = sizeOption.querySelector(".product-size-tooltip");

  const sizeOptions = sizeOption.querySelectorAll(".product-size-tooltip span");

  sizeOptions.forEach((sizeElement) => {
    sizeElement.addEventListener("click", (event) => {
      event.stopPropagation();

      const selectedSize = sizeElement.dataset.size;

      sizeCurrent.dataset.size = selectedSize;
      sizeCurrent.textContent = selectedSize;
    });
  });

  setupTooltip(sizeOption, sizeTooltip);
  setupTooltip(colorOption, colorTooltip);

  return productElement;
}

function renderProducts() {
  if (!productGridElement || !Array.isArray(products)) {
    return;
  }

  productGridElement.innerHTML = "";

  products.forEach((product) => {
    const productElement = createProduct(product);
    productGridElement.appendChild(productElement);
  });
}

renderProducts();
