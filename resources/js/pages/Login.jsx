import { Link } from 'react-router-dom';
import { useEffect } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import CardAuthHeader from '../components/CardAuthHeader';

import { Mail, Lock } from "lucide-react";

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
        <div className="w-md justify-center shadow-lg shadow-black/25 bg-zinc-800 px-10 py-10 mx-auto mt-30 rounded-2xl">
            <CardAuthHeader title="Welcome Back!" subtitle="Let’s build something great"/>
            <form className="mt-10">
                <Label>E-mail or Nickname</Label>
                <Input
                    type="text"
                    placeholder="Please enter your email"
                    icon={Mail}
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="* * * * * * * *"
                    icon={Lock}
                />
                <div className="text-end text-blue-200 text-xs">
                    <a href="">Forgot Password?</a>
                </div>
                <Button type="submit" className="w-full">LogIn</Button>
            </form>
            <div className="text-center text-neutral-200 mt-10">
                Don't have an account? <span className="text-blue-500"><a href="/signup">Sign up</a></span>
            </div>
        </div >
    );
}

export default Login;