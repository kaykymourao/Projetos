import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

/* Páginas */
import Clientes from "./pages/Clientes"
import ClienteForm from "./pages/ClienteForm"
import Contatos from './pages/Contatos'
import ContatoForm from "./pages/ContatoForm"
import EditClienteForm from './pages/EditClienteForm'
import EditContatoForm from './pages/EditContatoForm'

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/cliente/novo" element={<ClienteForm />} />
          <Route path="/cliente/editar/:id" element={<EditClienteForm />} />
          <Route path="/cliente/:id/contatos" element={<Contatos />} />
          <Route path="/cliente/:id/contato/novo" element={<ContatoForm />} />
          <Route path="/cliente/:id/contato/editar/:contatoId" element={<EditContatoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
