import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getClientes = async () => {
    try {
        const response = await axios.get(`${API_URL}/clientes`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return [];
    }
};

export const addCliente = async (cliente) => {
    try{
        const response = await axios.post(`${API_URL}/clientes`, cliente);
        return response.data;
    } catch (error){
        console.error("Erro ao adicionar cliente:", error);
        return null;
    }
}

export const getContatos = async (clienteId) => {
    try {
        const response = await axios.get(`${API_URL}/clientes/${clienteId}/contatos`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar contatos:", error);
        return [];
    }
};

export const getClienteById = async (id) => {
    const response = await fetch(`${API_URL}/clientes/${id}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Erro ao buscar cliente");
};

export const editarCliente = async (formData) => {
    try {
        const response = await fetch(`http://localhost:8080/clientes/${formData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
            throw new Error("Erro ao atualizar cliente");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao editar cliente", error);
        throw error;
    }
};

export const addContato = async (contato) => {
    try {
        const response = await fetch(`http://localhost:8080/contatos/${contato.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        });

        if (!response.ok) {
            throw new Error("Erro ao adicionar contato");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao adicionar contato:", error);
        throw error;
    }
};

export const getContatoById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/contatos/contatos/${id}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar contato");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar contato", error);
        throw error;
    }
};

export const editarContato = async (contato) => {
    try {
        const response = await fetch(`http://localhost:8080/contatos/contatos/${contato.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        });
        if (!response.ok) {
            throw new Error('Erro ao editar contato');
        }
        const data = await response.json();
        console.log("Contato atualizado com sucesso", data);
    } catch (error) {
        console.error("Erro ao editar contato", error);
    }
};

export const excluirCliente = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/clientes/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Erro ao excluir cliente");
        }
    } catch (error) {
        console.error("Erro ao excluir cliente", error);
        throw error;
    }
};

export const excluirContato = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/contatos/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Erro ao excluir contato");
        }
    } catch (error) {
        console.error("Erro ao excluir contato", error);
    }
};

export const buscarClientes = async (termo) => {
    try {
        const response = await fetch(`http://localhost:8080/clientes/buscar?termo=${termo}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar clientes");
        }
        const data = await response.json();
        setClientes(data);
    } catch (error) {
        console.error("Erro ao buscar clientes", error);
    }
};
