(function () {
  const cooperationForm = document.getElementById("cooperationForm");
  const callForm = document.getElementById("callForm");

  function handleSubmit(form, successMessage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input[required]");
      let valid = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) valid = false;
      });
      if (!valid) {
        alert("Пожалуйста, заполните все обязательные поля");
        return;
      }
      alert(successMessage);
      form.reset();
    });
  }

  if (cooperationForm) {
    handleSubmit(
      cooperationForm,
      "Спасибо! Наш специалист свяжется с вами в течение 15 минут.",
    );
  }

  if (callForm) {
    handleSubmit(
      callForm,
      "Спасибо за обращение! Мы ответим на ваш вопрос в ближайшее время.",
    );
  }
})();
