import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {Object.keys(Routes).map((key) => (
        <Route
          key={key}
          path={`/${key.replace(/(?!^)([A-Z])/g, `-$1`)}`.toLowerCase()}
          component={Routes[key]}
        />
      ))}
    </BrowserRouter>
  );
}

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(<App />, document.getElementById('app'));
