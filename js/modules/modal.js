export function initModal() {
  let modalOverlay = document.querySelector(".modal-overlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    modalOverlay.innerHTML = `
      <div class="modal-container">
        <span class="modal-close">&times;</span>
        <div class="modal-form">
          <h3 id="modalTitle">Заказать звонок</h3>
          <p>Оставьте контакты, и мы перезвоним вам в течение 15 минут</p>
          <div id="modalFormContainer"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  const closeBtn = modalOverlay.querySelector(".modal-close");
  const title = modalOverlay.querySelector("#modalTitle");
  const formContainer = modalOverlay.querySelector("#modalFormContainer");
  let currentForm = null;

  async function loadForm(type) {
    const formHtml = `
      <form id="modalForm" data-fetchit>
        <input type="text" name="name" placeholder="Ваше имя" required>
        <input type="tel" name="phone" placeholder="Телефон" required>
        <textarea name="message" placeholder="Ваш вопрос (необязательно)"></textarea>
        <label class="checkbox-label">
          <input type="checkbox" name="consent" required> Даю согласие на обработку персональных данных
        </label>
        <input type="hidden" name="type" value="${type}">
        <button type="submit">Отправить заявку</button>
      </form>
    `;
    formContainer.innerHTML = formHtml;
    currentForm = formContainer.querySelector("#modalForm");
    if (typeof FetchIt !== "undefined") {
      FetchIt.initForm(currentForm);
    }
    currentForm.addEventListener("fetchit:success", () => {
      closeModal();
      alert("Заявка отправлена! Мы свяжемся с вами.");
    });
    currentForm.addEventListener("fetchit:error", (e) => {
      alert("Ошибка: " + (e.detail.message || "попробуйте позже"));
    });
  }

  function openModal(type) {
    if (type === "call") {
      title.innerText = "Заказать звонок";
    } else {
      title.innerText = "Заказать расчёт";
    }
    loadForm(type);
    modalOverlay.classList.add("active");
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    formContainer.innerHTML = "";
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  closeBtn.addEventListener("click", closeModal);

  return { openModal };
}
