import { BrowserRouter } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
