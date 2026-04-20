(function () {
  const slidersData = {
    "panel-home": ["one.jpg", "two.jpg"],
    office: ["one.jpg"],
    cutting: ["one.jpg", "two.jpg"],
  };

  function initSlider(container) {
    const sliderId = container.dataset.slider;
    const images = slidersData[sliderId];
    if (!images || images.length <= 1) return;

    let currentIndex = 0;
    const imgElement = container.querySelector(".slider-image img");
    const basePath = `assets/slider/${sliderId}/`;

    function updateImage() {
      imgElement.src = basePath + images[currentIndex];
    }

    const prevBtn = container.querySelector(".slider-prev");
    const nextBtn = container.querySelector(".slider-next");

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  }

  document.querySelectorAll(".slider-container").forEach(initSlider);
})();
