import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./reset.css";
import "./style.css";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Sessoes from "./pages/Sessoes";
import Assentos from "./pages/Assentos";
import Sucesso from "./pages/Sucesso";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route exact path="/filmes/:id" element={<Sessoes />} />
      <Route exact path="/sessao/:idAssento" element={<Assentos />} />
      <Route path="/sucesso" element={<Sucesso />} />
    </>
  )
);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
