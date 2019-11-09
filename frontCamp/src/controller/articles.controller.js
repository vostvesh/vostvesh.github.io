import ArticlesModel from '../model/articles.model';
import ArticlesView from '../view/articles.view';

class ArticlesController {
  /**
   * @param {ArticlesModel} model 
   * @param {ArticlesView} view 
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showArticles(sourceId) {
    (async () => {
      await this.model.update(sourceId);
      this.view.data = this.model.articles;
      this.view.render();
    })();
  }
}

export default ArticlesController;
