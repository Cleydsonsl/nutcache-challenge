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

    this.patch('/register/:id', (schema, request) => {
      const register = JSON.parse(request.requestBody);

      return schema.db.register.update(register.id, register);
    });

    this.delete('/register/:id', (schema, request) => {
      const id = request.params.id;

      return schema.db.request.find(id)?.destroy()
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
