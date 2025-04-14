import { Link } from 'react-router-dom';
import { useEffect } from "react";

import CardAuth from '../components/CardAuth';

function Login() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('/img/background/login.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";

        return () => {
            // Limpa o background quando sair da página de login
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundRepeat = "";
        };
    }, []);
    return (
        <div>
            <CardAuth />
        </div>
    );
}

export default Login;