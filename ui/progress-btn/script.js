class LoadingBtn {
  constructor(node) {
    this.node = node;
    this.indicator = null;
    this.templates = document.querySelector("[data-for-component='loading-btn']");
    this.boundHandleClick = this.handleClick.bind(this);
    this.boundLoading = this.loading.bind(this);
    this.bindEventListeners();
    this.load = 0;
  }

  bindEventListeners() {
    this.node.addEventListener('click', this.boundHandleClick);
  }

  handleClick() {
    this.indicator = this.loadingTemplate.content.firstElementChild.cloneNode(true);
    this.node.appendChild(this.indicator);
    this.int = setInterval(this.boundLoading, 100);
  }

  loading() {
    if (this.load >= 99) {
      clearInterval(this.int);
    } else {
      this.indicator.style.width = `${this.load += 1}px`;
    }
  }
}

const loadingBtns = document.querySelectorAll("[data-component='loading-btn']");

loadingBtns.forEach((btn) => {
  new LoadingBtn(btn);
});
