import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Componentes/SideBar Section/Sidebar';
import Body from './Componentes/Body Section/Body';
import Carrito from './Componentes/Sections/Carrito Section/Carrito'
import Explorar from './Componentes/Sections/Explorar Section/Explorar'
import Productos from './Componentes/Sections/Productos Section/Productos'
import Pedido from './Componentes/Sections/Pedido Section/Pedido'
import { ProductoDetalles } from './Componentes/Sections/Productos Section/ProductoDetalles/ProductoDetalles';
import Agregar from './Componentes/Sections/Agregar Producto/Agregar';
import { DataProvider } from './context/DataProvider';


function App() {


  return (
    <DataProvider>
      <div className="container">
        <BrowserRouter>
          <Sidebar/>
          <Carrito/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="Productos" element={<Productos />} />
            <Route path="Producto/:id" element={<ProductoDetalles />} />
            <Route path="Explorar" element={<Explorar />} />
            <Route path="Pedido" element={<Pedido />} />
            <Route path="Publicar" element={<Agregar />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
