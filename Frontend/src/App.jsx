import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Tudo isolado 
import Menu from './Menu';
import Cadastro from './Cadastro';
import Login from './Login';
import Usuarios from './Usuarios';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Menu />} />

                <Route
                    path="/cadastro"
                    element={<Cadastro />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/usuarios"
                    element={<Usuarios />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;