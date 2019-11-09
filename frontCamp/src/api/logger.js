//4 - 3 + Proxy: Within the project, it is necessary to implement a proxy layer above the factory from p. 3, which would log all kinds of requests and transmitted parameters.
//PS: use ES6 Proxy

class RequestLogger {
  constructor() {
    return {
      get: function (obj, prop) {
        let message = 'Sending request: {\n';
        if (prop === 'send') {
          message += `\tMethod: [${obj.options.method}]\n`;
          message += `\tURL: [${obj.url}]\n`;
          if (obj.options.body) {
            message += `\tBody: ${obj.options.body}`;
          }
          message += '}'
          console.log(message);
        }
        return obj[prop];
      }
    }
  }
}

export {
  RequestLogger
}
