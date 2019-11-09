class SourceView {
  constructor(parentSelector, data = []) {
    this.parentSelector = parentSelector;
    this.data = data;
    this.onItemClick = null;
  }

  get template() {
    return (
      `<ul class="sources">${this.data.map(item => 
        `<li class="sources-item" data-id="${item.id}">
          <h3 class="sources-title">${item.name}</h3>
          <p class="sources-content">${item.description}</p>
        </li>`).join('')}
      </ul>`
    );
  }

  render() {
    const parentNode = document.querySelector(this.parentSelector);
    document.createDocumentFragment()
    parentNode.innerHTML = this.template;
  }
}

export default SourceView;
