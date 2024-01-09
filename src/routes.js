import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from "./paginas/SobreMim";
import Menu from "./componetes/menu";
import Rodape from "componetes/Rodape";
import PaginaPadrao from "componetes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componetes";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />
      <Routes>
        <Route patch="/" element={<PaginaPadrao/>}>
        <Route index element={<Inicio/>} />
        <Route path="sobremim" element={<SobreMim/>} />
        
        </Route>
      
        <Route path="posts/:id/*" element={<Post/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
   
  
}

export default AppRoutes;
