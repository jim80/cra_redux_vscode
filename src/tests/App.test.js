import React from 'react';
import ReactDOM from 'react-dom';
import ProvidedApp from '../components/ProvidedApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProvidedApp />, div);
});
