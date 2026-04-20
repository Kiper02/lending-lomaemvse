(function () {
  const faqData = [
    {
      question: "Как быстро вы можете приехать на объект?",
      answer:
        "Мы выезжаем на объект в день обращения. Обычно наш специалист приезжает в течение 2–3 часов после звонка, в зависимости от загруженности.",
    },
    {
      question: "Вы работаете по договору?",
      answer:
        "Да, все работы оформляются официальным договором, в котором прописаны сроки, стоимость и гарантийные обязательства.",
    },
    {
      question: "Есть ли у вас лицензия на демонтаж?",
      answer:
        "Да, у нас есть все необходимые допуски и лицензии на проведение демонтажных работ любой сложности.",
    },
    {
      question: "Вы вывозите мусор?",
      answer:
        "Да, мы полностью убираем и вывозим строительный мусор после демонтажа. Вам не придётся этим заниматься.",
    },
  ];

  const track = document.getElementById("faqTrack");
  const wrapper = document.querySelector(".faq-track-wrapper");
  const dotsContainer = document.getElementById("faqDots");

  let currentIndex = 0;
  let itemsPerSlide = 2;
  let totalSlides = 0;
  let slideWidth = 0;

  function renderFaq() {
    track.innerHTML = "";
    faqData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "faq-card";
      card.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
      track.appendChild(card);
    });
  }

  function getItemsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateLayout() {
    itemsPerSlide = getItemsPerSlide();
    const cards = document.querySelectorAll(".faq-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    slideWidth = cardWidth + gap;
    totalSlides = Math.ceil(faqData.length / itemsPerSlide);
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
    if (currentIndex < 0) currentIndex = 0;

    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("faq-dot");
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
    document.querySelectorAll(".faq-dot").forEach((dot, idx) => {
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
  renderFaq();
  updateLayout();
})();
