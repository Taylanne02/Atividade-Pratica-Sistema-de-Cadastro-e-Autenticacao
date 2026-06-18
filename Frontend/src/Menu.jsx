import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <h1>Sistema de Cadastro</h1>

            <Link to="/cadastro">
                <button>Cadastro</button>
            </Link>

            <br /><br />

            <Link to="/login">
                <button>Login</button>
            </Link>

            <Link to="/usuarios">
                <button>Usuarios</button>
            </Link>
        </div>
    );
}

export default Menu;