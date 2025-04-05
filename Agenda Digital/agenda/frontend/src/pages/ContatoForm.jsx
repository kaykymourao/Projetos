import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addContato } from "../services/api";

import "../styles/contatoform.css";

const ContatoForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tipoContato: "",
        valor_contato: "",
        observacao: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoContato = { ...formData, id };
        console.log(novoContato);
        try {
            console.log(id);
            await addContato(novoContato);
            navigate(`/cliente/${id}/contatos`);
        } catch (error) {
            console.error("Erro ao adicionar contato", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <h2>Adicionar Contato</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tipo de Contato:
                    <input
                        type="text"
                        name="tipoContato"
                        value={formData.tipoContato}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Valor do Contato:
                    <input
                        type="text"
                        name="valor_contato"
                        value={formData.valor_contato}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Observação:
                    <textarea
                        name="observacao"
                        value={formData.observacao}
                        onChange={handleChange}
                    />
                </label>
                <div className="form-buttons">
                    <button type="button" onClick={() => navigate(-1)}>Voltar</button>
                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </div>
    );
};

export default ContatoForm;
