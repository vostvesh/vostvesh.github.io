class ErrorHandler {
  constructor() {
    throw new Error('Keyword "new" forbidden');
  }

  static renderError(error) {
    (async () => {
      const errorPopup = await import('../view/error-popup.view');
      errorPopup.default.render(error);
    })();
  }

  static handleStatusOk(response) {
    if (!response && !response.status !== 'ok') {
      this.renderError(`Response status is not correct ${response.status}`);
    }
  }

  static handleSources(response) {
    if (!response.sources) {
      this.renderError(`Response should contain "sources" property. ${JSON.stringify(response)}`);
    }
  }

  static handleArticles(response) {
    if (!response.articles) {
      this.renderError(`Response should contain "articles" property. ${JSON.stringify(response)}`);
    }
  }
}

export default ErrorHandler;
