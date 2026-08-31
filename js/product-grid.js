const productGrid = document.getElementById("productGrid");

function formatPrice(price) {
  return `₡${price.toLocaleString("es-CR")}`;
}

function createProduct(product) {
  const li = document.createElement("li");

  li.dataset.productId = product.id;

  li.innerHTML = `
    <div class="cbp-pgcontent">

        <div class="cbp-pgitem">

            <div class="cbp-pgitem-flip">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

        </div>


        <ul class="cbp-pgoptions">

            <!-- TALLA -->
            <li class="cbp-pgoptsize">

                <span data-size="${product.defaultSize}">
                    ${product.defaultSize}
                </span>

                <div class="cbp-pgopttooltip">

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


            <!-- COLOR -->
            <li class="cbp-pgoptcolor">

                <span data-color="${product.defaultColor}">
                    ${getColorName(product.colors, product.defaultColor)}
                </span>

                <div class="cbp-pgopttooltip">

                    ${product.colors
                      .map(
                        (color) => `
                                <span data-color="${color.id}">
                                    ${color.name}
                                </span>
                            `,
                      )
                      .join("")}

                </div>

            </li>


            <!-- CARRITO -->
            <li class="cbp-pgoptcart"></li>

        </ul>

    </div>


    <!-- INFORMACIÓN DEL PRODUCTO -->
    <div class="cbp-pginfo">
        <div class="cbp-pginfo-main">
            <div class="cbp-pginfo-details">
                <span class="cbp-pgcategory">
                    GUAU COLLECTION
                </span>
                <h3>
                    ${product.name}
                </h3>
            </div>

            <span class="cbp-pgprice">
                ${formatPrice(product.price)}
            </span>
        </div>
    </div>
`;

  return li;
}

function getColorName(colors, colorId) {
  const color = colors.find((color) => color.id === colorId);

  return color ? color.name : "";
}

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const productElement = createProduct(product);

    productGrid.appendChild(productElement);
  });
}

renderProducts();
