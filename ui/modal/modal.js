document.addEventListener('DOMContentLoaded', () => {
  const modalTrigger = document.querySelector('.js-open-modal');
  const closeTrigger = document.querySelectorAll('.js-close');
  const overlay = document.querySelector('.js-overlay');
  const modal = document.querySelector('.js-modal');
  const submitBtn = modal.querySelector('.js-submit-modal');

  function closeModal() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.top = '';
    modalTrigger.focus();
    window.removeEventListener('keydown', escapeListener);
  }

  function escapeListener(event) {
    console.log(event.key === 'Escape');
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function openModal() {
    modal.classList.add('show');
    overlay.classList.add('show');
    submitBtn.focus();

    window.addEventListener('keydown', escapeListener);
  }

  modalTrigger.addEventListener('click', () => {
    openModal();
  });

  closeTrigger.forEach((el) => {
    el.addEventListener('click', () => {
      closeModal();
    });
  });

  submitBtn.addEventListener('click', () => {
    closeModal();
  });
});
