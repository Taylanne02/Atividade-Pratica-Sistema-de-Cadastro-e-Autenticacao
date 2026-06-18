import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <h1>Sistema de Cadastro</h1>

            <Link to="/cadastro">
                 <button className="menu-button cadastro">Cadastro</button>
            </Link>

            <br /><br />

            <Link to="/login">
                 <button className="menu-button login">Login</button>
            </Link>

            <br /><br />
            <div style={{ textAlign: 'center' }}>
                <Link to="/usuarios">
                    <button className="menu-button usuarios">Usuarios</button>
                </Link>
            </div>
        </div>
    );
}

export default Menu;