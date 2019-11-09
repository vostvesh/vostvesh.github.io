import SourcesModel from '../model/sources.model';
import SourcesView from '../view/source.view';

class SourcesController {
  /**
   * @param {SourcesModel} model 
   * @param {SourcesView} view 
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showSources() {
    (async () => {
      await this.model.update();
      this.view.data = this.model.sources;
      this.view.render();
    })();
  }
}

export default SourcesController;
