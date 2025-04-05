import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getClienteById, editarCliente } from "../services/api";

import "../styles/editclienteform.css";

const EditClienteForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const cliente = await getClienteById(id);
                setFormData(cliente);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar cliente", error);
                setLoading(false);
            }
        };

        if (id) {
            fetchCliente();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clienteAtualizado = { ...formData, id };
        try {
            await editarCliente(clienteAtualizado);
            navigate("/");
        } catch (error) {
            console.error("Erro ao editar cliente", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="form-container">
            <h2>Editar Cliente</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    CPF:
                    <input
                        type="text"
                        name="cpf"
                        value={formData.cpf} 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Data de Nascimento:
                    <input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                </label>
                <div className="form-buttons">
                    <button type="button" onClick={() => navigate(-1)}>Voltar</button>
                    <button type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    );
};

export default EditClienteForm;
