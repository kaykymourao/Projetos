import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { addCliente } from "../services/api";
import { getClientes } from "../services/api";

import "../styles/clienteform.css";

const ClienteForm = () => {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
    });

    const [mensagem, setMensagem] = useState("");
    const [clientesExistentes, setClientesExistentes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            const clientes = await getClientes();
            setClientesExistentes(clientes);
        };
        fetchClientes();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cpfJaExiste = clientesExistentes.some(c => c.cpf === cliente.cpf);
        if(cpfJaExiste){
            setMensagem("CPF já existe");
            return;
        }
        
        const novoCliente = await addCliente(cliente);

        if(novoCliente){
            e.target.reset();
            setCliente({
                nome: "",
                cpf: "",
                dataNascimento: "",
                endereco: "",  
            });
        }
    };

    const navigate = useNavigate();

    return (
        <div className="cliente-form-container">
            <h2>Cadastrar Cliente</h2>
            {mensagem && <p className="mensagem">{mensagem}</p>}
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" value={cliente.nome} onChange={handleChange} required />

                <label>CPF:</label>
                <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} required />

                <label>Data de Nascimento:</label>
                <input type="date" name="dataNascimento" value={cliente.dataNascimento} onChange={handleChange} required />

                <label>Endereço:</label>
                <input type="text" name="endereco" value={cliente.endereco} onChange={handleChange} />

                <button type="submit">Salvar</button>
                <button className="voltar" onClick={() => navigate(-1)}>Voltar</button>
            </form>
        </div>
    );
};

export default ClienteForm;
