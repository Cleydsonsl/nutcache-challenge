import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    register: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/register', () => {
      return this.schema.all('register')
    })

    this.post('/register', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('register', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
