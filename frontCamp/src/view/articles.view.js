class ArticlesView {
  constructor(parentSelector, data = []) {
    this.parentSelector = parentSelector;
    this.data = data;
  }

  get template() {
    return `<ul class="articles">
        ${this.data.map(article => `<li class="article-item">
          <h3 class="article-title">${article.title}</h3>
          <a href="${article.url}"><img src="${article.urlToImage}"/></a>
          <p class="article-content">${article.description}</p>
        </li>`).join('')}
      </ul>`;
  }

  render() {
    const parentNode = document.querySelector(this.parentSelector);
    parentNode.innerHTML = this.template;
  }
}

export default ArticlesView;
