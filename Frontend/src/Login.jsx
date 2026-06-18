import { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const { setUsuario } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [mensagem, setMensagem] = useState('');

    async function fazerLogin(e) {

        e.preventDefault();

        try {

            const resposta = await axios.post(
                'https://atividade-pratica-sistema-de-cadastro-e-0o27.onrender.com/login',
                {
                    email,
                    senha
                }
            );

            setUsuario(resposta.data.usuario);
            setMensagem(resposta.data.mensagem);

        } catch (error) {

            setMensagem(
                error.response?.data?.erro ||
                'Erro ao fazer login'
            );

        }
    }

    return (
        <div>

            <button onClick={() => navigate('/')}>
                Voltar
            </button>

            <h2>Login</h2>

            <form onSubmit={fazerLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Entrar
                </button>

            </form>

            <p>{mensagem}</p>

        </div>
    );
}

export default Login;