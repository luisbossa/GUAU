const sliderContainer = document.getElementById("hero-slides");
const thumbnailsContainer = document.getElementById("slider-thumbnails");

function isDarkColor(hex) {
  hex = hex.replace("#", "").trim();

  // Convierte #fff → #ffffff
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness < 128;
}

function renderSlides() {
  if (!sliderContainer) return;

  sliderContainer.innerHTML = sliderItems
    .map((item) => {
      const darkBackground = isDarkColor(item.background);

      return `
        <div
          class="swiper-slide hero-slide ${
            darkBackground ? "theme-dark" : "theme-light"
          }"
          style="background-color: ${item.background}"
        >

          <div
            class="hero-slide-content"
            data-swiper-parallax-x="100%"
          >

            <picture 
                class="hero-media"
                style="background-color: ${item.background}"
            >
                <img 
                    data-swiper-parallax-x="-50%"
                    class="hero-image"
                    src="${item.image}"
                    alt="${item.title}"
                />
            </picture>

            <div class="swiper-nav swiper-prev"></div>
            <div class="swiper-nav swiper-next"></div>

            <div 
          class="slider-info hero-info" 
          data-swiper-parallax-opacity="0"
        >
        <div class="hero-info-main">
            <div class="hero-info-heading">
                <span class="hero-eyebrow">
                    GUAU SHOP
                </span>

                <h2 class="hero-title">
                    ${item.title}
                </h2>
            </div>

            <div class="hero-info-footer">

                <!-- DESCRIPCIÓN -->
                <div class="hero-description-wrapper">
                    <p class="hero-description">
                        ${item.description}
                    </p>

                </div>

                <div class="hero-purchase">

                    <div class="hero-price">
                        <span class="hero-price-label">
                            Precio
                        </span>

                        <span class="hero-price-value">
                            ${item.price}
                        </span>
                    </div>

                    <div class="hero-info-action">
                        <a 
                            class="shop-btn" 
                            href="${item.link}"
                        >
                            ${item.button}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

          </div>
        </div>
      `;
    })
    .join("");
}

function renderThumbnails() {
  if (!thumbnailsContainer) return;

  thumbnailsContainer.innerHTML = sliderItems
    .map((item) => {
      const darkBackground = isDarkColor(item.background);

      return `
        <div
          class="swiper-slide slider-thumbnail ${
            darkBackground ? "theme-dark" : "theme-light"
          }"
          id="thumb-${item.id}"
        >

          <img
            class="thumbnail-image"
            src="${item.thumb}"
            alt="${item.title}"
            style="background-color: ${item.background}"
          >

          <div class="progress-thumb">

            <svg
              class="progress"
              width="94"
              height="132"
              viewBox="0 0 96 134"
            >
              <path
                d="M48.5,1 L80,1 C88.2842712,1 95,7.71572875 95,16 L95,118 C95,126.284271 88.2842712,133 80,133 L16,133 C7.71572875,133 1,126.284271 1,118 L1,16 C1,7.71572875 7.71572875,1 16,1 L48.5,1 Z"
              />
            </svg>

          </div>

        </div>
      `;
    })
    .join("");
}

function renderSlider() {
  renderSlides();
  renderThumbnails();
}

renderSlider();
