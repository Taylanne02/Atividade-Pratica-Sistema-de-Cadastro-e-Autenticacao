import { useEffect, useState } from 'react';
import axios from 'axios';

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        carregarUsuarios();
    }, [pagina]);

    async function carregarUsuarios() {

        const resposta = await axios.get(
            `https://atividade-pratica-sistema-de-cadastro-e-0o27.onrender.com/usuarios?pagina=${pagina}`
        );

        setUsuarios(resposta.data);
    }

    return (
        <div>

            <h2>Lista de Usuários</h2>

            {usuarios.map(usuario => (
                <div key={usuario.id}>
                    {usuario.nome} - {usuario.email}
                </div>
            ))}

            <br />

            <button
                onClick={() => setPagina(pagina - 1)}
                disabled={pagina === 1}
            >
                Anterior
            </button>

            <span> Página {pagina} </span>

            <button
                onClick={() => setPagina(pagina + 1)}
            >
                Próxima
            </button>

        </div>
    );
}

export default Usuarios;