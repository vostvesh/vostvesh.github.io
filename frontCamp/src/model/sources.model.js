import api from '../api/api';

class SourcesModel {
  constructor(sources = []) {
    this.sources = sources;
    this.itemId = '';
  }

  async update() {
    this.sources = await api.getAllSources();
  }
}

export default SourcesModel;