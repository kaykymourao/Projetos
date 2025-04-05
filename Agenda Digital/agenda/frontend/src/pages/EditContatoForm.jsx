import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContatoById, editarContato } from "../services/api";

import "../styles/editcontatoform.css";

const EditContatoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      tipo_contato: "",
      valor_contato: "",
      observacao: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchContato = async () => {
          try {
              const contato = await getContatoById(id);
              setFormData(contato);
              setLoading(false);
          } catch (error) {
              console.error("Erro ao buscar contato", error);
              setLoading(false);
          }
      };

      if (id) {
          fetchContato();
      }
  }, [id]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const contatoAtualizado = { ...formData, id };
      try {
          await editarContato(contatoAtualizado);
          navigate(`/cliente/${id}/contatos`);
      } catch (error) {
          console.error("Erro ao editar contato", error);
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
          <h2>Editar Contato</h2>
          <form onSubmit={handleSubmit}>
              <label>
                  Tipo de Contato:
                  <input
                      type="text"
                      name="tipo_contato"
                      value={formData.tipo_contato || ""}
                      onChange={handleChange}
                  />
              </label>
              <label>
                  Valor de Contato:
                  <input
                      type="text"
                      name="valor_contato"
                      value={formData.valor_contato || ""}
                      onChange={handleChange}
                  />
              </label>
              <label>
                  Observação:
                  <input
                      type="text"
                      name="observacao"
                      value={formData.observacao || ""}
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


export default EditContatoForm;
