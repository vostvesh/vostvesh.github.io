import SourcesModel from './model/sources.model';
import SourcesView from './view/source.view';
import SourcesController from './controller/sources.controller';
import ArticlesModel from './model/articles.model';
import ArticlesView from './view/articles.view';
import ArticlesController from './controller/articles.controller';

class App {
  constructor() {}

  init() {
    const sourcesModel = new SourcesModel();
    const sourcesView = new SourcesView('#root');
    const sourcesController = new SourcesController(sourcesModel, sourcesView);
    sourcesController.showSources();
    const articlesModel = new ArticlesModel();
    const articlesView = new ArticlesView('#root');
    const articlesController = new ArticlesController(articlesModel, articlesView);

    document.querySelector('#root').addEventListener('click', (e) => {
      if (e.target.closest('li')) {
        const parentLi = e.target.closest('li');
        if (parentLi.dataset['id']) {
          articlesController.showArticles(parentLi.dataset['id']);
        }
      }
    });
  }
}

export default App;
