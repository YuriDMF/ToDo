import { Link } from 'react-router-dom';
import { useEffect } from "react";

function SignUp() {
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
            <h1>SignUp</h1>
        </div>
    );
}

export default SignUp;