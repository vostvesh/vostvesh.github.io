import api from '../api/api';

class ArticlesModel {
  constructor(sourceId) {
    this.articles = null;
    this.sourceId = sourceId;
  }

  async update(sourceId) {
    this.sourceId = sourceId;
    this.articles = await api.getArticles(sourceId);
  }

  getArticles(count = 10) {
    return count < this.articles.length ? this.articles.splice(0, count) : articles;
  }
}

export default ArticlesModel;
