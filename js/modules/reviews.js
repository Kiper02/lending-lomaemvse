(function () {
  const reviewsData = [
    {
      name: "Алексей Владимирович",
      type: "Демонтаж квартиры",
      avatar: "assets/reviews/one.png",
      text: "Перед началом работ обязательно проверим, где проложена проводка, какие коммуникации есть, чтобы не задеть их в процессе демонтажа, сделаем фотофиксацию состояния вашего подъезда",
    },
    {
      name: "Генадий Петрович",
      type: "Демонтаж стен",
      avatar: "assets/reviews/two.png",
      text: "Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.",
    },
    {
      name: "Екатерина Смирнова",
      type: "Демонтаж потолка",
      avatar: "assets/reviews/three.png",
      text: "Очень довольна работой! Приехали вовремя, всё сделали аккуратно, мусор вывезли. Рекомендую.",
    },
    {
      name: "Игорь Васильев",
      type: "Полный демонтаж",
      avatar: "assets/reviews/four.png",
      text: "Профессионалы своего дела. Демонтировали старую отделку за один день, без шума и пыли. Спасибо!",
    },
  ];

  const track = document.getElementById("reviewsTrack");
  const wrapper = document.querySelector(".reviews-track-wrapper");
  const dotsContainer = document.getElementById("reviewsDots");

  let currentIndex = 0;
  let itemsPerSlide = 2;
  let totalSlides = 0;
  let slideWidth = 0;

  function renderReviews() {
    track.innerHTML = "";
    reviewsData.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.innerHTML = `
                <div class="review-header">
                    <div class="review-avatar"><img src="${review.avatar}" alt="${review.name}"></div>
                    <div class="review-info"><h4>${review.name}</h4><span class="review-type">${review.type}</span></div>
                </div>
                <p class="review-text">${review.text}</p>
            `;
      track.appendChild(card);
    });
  }

  function getItemsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateLayout() {
    itemsPerSlide = getItemsPerSlide();
    const cards = document.querySelectorAll(".review-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    slideWidth = cardWidth + gap;
    totalSlides = Math.ceil(reviewsData.length / itemsPerSlide);
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
    if (currentIndex < 0) currentIndex = 0;

    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === currentIndex) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updatePosition();
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
    updatePosition();
  }

  function updatePosition() {
    const offset = currentIndex * itemsPerSlide * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, idx) => {
      if (idx === currentIndex) dot.classList.add("active");
      else dot.classList.remove("active");
    });
  }

  function next() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updatePosition();
      updateDots();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      updatePosition();
      updateDots();
    }
  }

  function handleWheel(e) {
    if (wrapper.contains(e.target)) {
      e.preventDefault();
      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    }
  }

  window.addEventListener("resize", updateLayout);
  wrapper.addEventListener("wheel", handleWheel, { passive: false });
  renderReviews();
  updateLayout();
})();
