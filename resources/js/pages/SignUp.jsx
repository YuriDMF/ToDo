import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import CardAuthHeader from '../components/CardAuthHeader';

import { Mail, Lock, User, Phone } from "lucide-react";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', { name, email, password });
            toast.success('Usuário cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            // Limpar campos
            setName('');
            setEmail('');
            setPassword('');
        } catch (err) {
            toast.error('Erro ao cadastrar o usuário.');
        }
    };

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
            <CardAuthHeader title="Create an Account!" subtitle="You are welcome" />
            <form className="mt-10" onSubmit={registerUser}>
                <Label>Full Name</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Luiz Argenta"
                    icon={User}
                    required
                />
                <Label>E-mail</Label>
                <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your email"
                    icon={Mail}
                    required
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="* * * * * * * *"
                    icon={Lock}
                    required
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