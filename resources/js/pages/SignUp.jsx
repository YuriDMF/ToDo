import { Link } from 'react-router-dom';
import { useEffect } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import CardAuthHeader from '../components/CardAuthHeader';

import { Mail, Lock, User, Phone } from "lucide-react";

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
        <div className="w-md justify-center shadow-lg shadow-black/25 bg-zinc-800 px-10 py-10 mx-auto mt-30 rounded-2xl">
            <CardAuthHeader title="Create an Account!" subtitle="You are welcome"/>
            <form className="mt-10">
                <Label>Full Name</Label>
                <Input
                    type="text"
                    placeholder="Ex: Luiz Argenta"
                    icon={User}
                />
                <Label>E-mail</Label>
                <Input
                    type="text"
                    placeholder="Please enter your email"
                    icon={Mail}
                />
                <Label>Phone</Label>
                <Input
                    type="text"
                    placeholder="Please enter your phone"
                    icon={Phone}
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="* * * * * * * *"
                    icon={Lock}
                />
                <Button type="submit" className="w-full">Sign Up</Button>
            </form>
            <div className="text-center text-neutral-200 mt-10">
                Already have an account? <span className="text-blue-500"><Link to="/">Sign In</Link></span>
            </div>
        </div >
    );
}

export default SignUp;