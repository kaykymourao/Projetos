import { useEffect, useState } from 'react';
import { getClientes, excluirCliente } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/clientes.css';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientes = async () => {
            const data = await getClientes();
            setClientes(data);
        };
        fetchClientes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await excluirCliente(id);  // Aguarde a exclusão no backend
            setClientes(clientes.filter(cliente => cliente.id !== id)); // Atualiza o estado
        } catch (error) {
            console.error("Erro ao excluir cliente", error);
        }
    };
    

    const filteredClientes = clientes.filter(cliente => 
        cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cliente.cpf.includes(searchTerm)
    );

    return (
        <div className="clientes-container">
            <h2>Lista de Clientes</h2>
            <input 
                type="text" 
                placeholder="Buscar por Nome ou CPF" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="add-btn" onClick={() => navigate('/cliente/novo')}>Adicionar Cliente</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.dataNascimento}</td>
                            <td>{cliente.endereco}</td>
                            <td>
                                <button className="edit-btn" onClick={() => navigate(`/cliente/editar/${cliente.id}`)}>Editar</button>
                                <button className="contacts-btn" onClick={() => navigate(`/cliente/${cliente.id}/contatos`)}>Ver Contatos</button>
                                <button className="delete-btn" onClick={() => handleDelete(cliente.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Clientes;
