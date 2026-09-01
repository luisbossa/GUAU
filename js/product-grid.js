const productGridElement = document.getElementById("product-grid");

function formatPrice(price) {
  return `₡${price.toLocaleString("es-CR")}`;
}

function createProduct(product) {
  const productElement = document.createElement("li");

  productElement.className = "product-card";
  productElement.dataset.productId = product.id;

  productElement.innerHTML = `
        <div class="product-content">
            <div class="product-image">
                <div class="product-image-flip">
                    <img
                        src="${product.image}"
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
                    <span data-color="${product.defaultColor}">
                        ${getColorName(product.colors, product.defaultColor)}
                    </span>
                    <div class="product-option-tooltip product-color-tooltip">
                        ${product.colors
                          .map(
                            (color) => `
                                    <span
                                        data-color="${color.id}"
                                        title="${color.name}"
                                    >
                                        ${color.name}
                                    </span>
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

  return productElement;
}

function getColorName(colors, colorId) {
  const color = colors.find((color) => color.id === colorId);
  return color ? color.name : "";
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
