import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div></div>;
}

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(<App />, document.getElementById('app'));
