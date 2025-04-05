import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContatos, excluirContato } from "../services/api";
import "../styles/contatos.css";

const Contatos = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        const fetchContatos = async () => {
            const data = await getContatos(id);
            setContatos(data);
        };
        fetchContatos();
    }, [id]);

    const handleDelete = async (contatoId) => {
        if (window.confirm("Tem certeza que deseja excluir este contato?")) {
            await excluirContato(contatoId);
            setContatos(contatos.filter(contato => contato.id !== contatoId));
        }
    };

    return (
        <div className="contatos-container">
            <h2>Contatos</h2>
            {contatos.length === 0 ? (
                <p>Nenhum contato encontrado.</p>
            ) : (
                <ul className="contatos-list">
                    {contatos.map((contato) => (
                        <li key={contato.id} className="contato-item">
                            <div className="contato-info">
                                <strong>Tipo de Contato:</strong> {contato.tipoContato}
                            </div>
                            <div className="contato-info">
                                <strong>Cliente:</strong> {contato.cliente.nome}
                            </div>
                            <div className="contato-info">
                                <strong>Observação:</strong> {contato.observacao ? contato.observacao : "Sem observação"}
                            </div>
                            <div className="contato-actions">
                                <button onClick={() => navigate(`/cliente/${id}/contato/editar/${contato.id}`)}>Editar</button>
                                <button onClick={() => handleDelete(contato.id)}>Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="contatos-buttons">
                <button className="back-button" onClick={() => navigate("/")}>Voltar</button>
                <button className="add-button" onClick={() => navigate(`/cliente/${id}/contato/novo`)}>Adicionar Contato</button>
            </div>
        </div>
    );
};

export default Contatos;