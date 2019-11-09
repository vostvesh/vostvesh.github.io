//3 - 2 + Factory: Within the project, it is necessary to implement a layer / factory responsible for requests to the server with GET, POST, PUT, etc methods. Not all types of requests can be used within the project, but it is important to organize everything correctly.
import { RequestLogger } from './logger';

const defaultOptions = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // no-referrer, *client
};

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

class Request {
  constructor(url, options = defaultOptions) {
    this.url = url;
    this.options = options;
  }

  set method(method) {
    this.options.method = method;
  }

  async send(data) {
    if (data) {
      this.options.body = JSON.stringify(data);
    }
    try {
      const response = await fetch(this.url, this.options);
      return await response.json();
    } catch (error) {
      const errorPopupModule = await import('./error-handler');
      errorPopupModule.default.renderError(error);
    }
  }
}

class RequestCreator {
  constructor(url, method) {
    switch(method) {
      case METHOD.GET:
        return new Request(url, { method: METHOD.GET });
      case METHOD.PUT:
        return new Request(url, { method: METHOD.PUT });
      case METHOD.POST:
        return new Request(url, { method: METHOD.POST });
      case METHOD.DELETE:
        return new Request(url, { method: METHOD.DELETE });
      default:
        return new Request(url, { method: METHOD.GET });
    }
  }
}

const sendRequest = async (url, method) => {
  const request = new Proxy(new RequestCreator(url, method), new RequestLogger());
  return await request.send();
};

export { sendRequest, METHOD };
