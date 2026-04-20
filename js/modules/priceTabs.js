(function () {
  const priceData = {
    floors: [
      {
        name: "Линолеум",
        desc: "По своей сути рыбатекст является альтернативой традиционному",
        price: "80",
      },
      {
        name: "Ламинат",
        desc: "С другой стороны сложившаяся структура организации",
        price: "200",
      },
      {
        name: "Деревянный пол",
        desc: "Равным образом начало повседневной работы по формированию",
        price: "90",
      },
      {
        name: "Паркет",
        desc: "Значимость этих проблем настолько очевидна, что новая модель",
        price: "160",
      },
      { name: "Плитка", desc: "Не следует, однако забывать", price: "190" },
      {
        name: "Стяжка",
        desc: "Повседневная практика показывает, что новая модель",
        price: "90",
      },
    ],
    walls: [
      {
        name: "Гипсокартон",
        desc: "Демонтаж перегородок из ГКЛ",
        price: "120",
      },
      {
        name: "Кирпичная стена",
        desc: "Полный демонтаж кирпичной кладки",
        price: "350",
      },
      {
        name: "Штукатурка",
        desc: "Снятие старого штукатурного слоя",
        price: "70",
      },
      { name: "Обои", desc: "Удаление обоев всех типов", price: "40" },
      { name: "Кафель", desc: "Демонтаж настенной плитки", price: "150" },
      { name: "Бетонная стена", desc: "Алмазная резка бетона", price: "500" },
    ],
    ceilings: [
      {
        name: "Натяжной потолок",
        desc: "Демонтаж ПВХ и тканевых потолков",
        price: "100",
      },
      { name: "Подвесной потолок", desc: "Армстронг и аналоги", price: "80" },
      { name: "Штукатурка", desc: "Снятие старого покрытия", price: "90" },
      { name: "Побелка", desc: "Смывка и удаление", price: "50" },
      { name: "Гипсокартон", desc: "Разборка каркаса и листов", price: "110" },
      { name: "Плитка", desc: "Демонтаж потолочной плитки", price: "60" },
    ],
  };

  const container = document.getElementById("priceList");
  const tabs = document.querySelectorAll(".tab-btn");

  function renderPrices(category) {
    const items = priceData[category];
    if (!items) return;
    container.innerHTML = items
      .map(
        (item) => `
            <div class="price-item">
                <div class="price-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="price-value">от <span>${item.price} руб.</span></div>
            </div>
        `,
      )
      .join("");
  }

  function setActiveTab(activeTab) {
    tabs.forEach((tab) => {
      if (tab.dataset.tab === activeTab) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  function init() {
    renderPrices("floors");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.tab;
        renderPrices(category);
        setActiveTab(category);
      });
    });
  }

  init();
})();
