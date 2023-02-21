import { React, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CakeStore from './store/CakeStore';
import LayStore from './store/LayStore';

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    cakes: new CakeStore(),
    layers: new LayStore()
  }}>
    <App />
  </Context.Provider>,
);


