import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          name: 'Mané',
          email: '@mail.com',
          dtnascimento: '2020-05-05',
          sexo: 'M',
          CPF: '0000',
          datainicio: '55/9999',
          equipe: 'movel'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
