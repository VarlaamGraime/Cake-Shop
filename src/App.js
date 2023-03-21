import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import NavBar from './components/NavBar';

function App() {
  return (
    <HashRouter >
      <NavBar />
      <AppRoute />
    </HashRouter>
  );
}

export default App;
