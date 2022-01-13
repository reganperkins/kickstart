function showProgress(btn) {
  let intervalId;
  let counter = 1;
  const textEl = document.createElement('span');
  const loadingBarEl = document.createElement('div');

  btn.innerText = '';
  textEl.innerText = '...Loading';
  loadingBarEl.className = 'loading-bar';
  btn.append(textEl);
  btn.append(loadingBarEl);

  function updateLoadingUI() {
    if (counter > 100) {
      clearInterval(intervalId);
      textEl.innerText = 'Loading Complete!';
      loadingBarEl.innerText = '';
      return;
    }

    loadingBarEl.innerText = `${counter}%`;
    loadingBarEl.style.width = `${counter}%`;
    counter += 1;
  }

  intervalId = setInterval(updateLoadingUI, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  const progressButtons = document.querySelectorAll('[data-component="progress-button"]');
  progressButtons.forEach((btn) => {
    btn.addEventListener('click', () => showProgress(btn));
  });
});
