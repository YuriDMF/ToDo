import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

import { Mail, Lock } from "lucide-react";

function CardAuth() {
    return (
        <div className="w-md justify-center shadow-lg shadow-black/25 bg-zinc-800 px-10 py-10 mx-auto mt-30 rounded-2xl">
            <div className="text-center">
                <img src="/img/brand.png" className="w-[50px] mb-10 mx-auto" />
                <h1 className="text-neutral-100 text-3xl font-medium mb-2">Welcome Back!</h1>
                <span className="text-neutral-400">Let’s build something greate</span>
            </div>
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

export default CardAuth;