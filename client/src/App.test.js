import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from "./pages/SignIn"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
