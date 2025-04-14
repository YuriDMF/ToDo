import { Mail } from "lucide-react";

function Input({ icon: Icon, ...props }) {
    return (
        <div className="relative w-full">
            <input
                className="mt-1 mb-5 block w-full px-3 py-2 placeholder-neutral-400 text-neutral-400 rounded-md border border-neutral-500 focus:outline-none focus:border-neutral-300"
                {...props}
            />
            {Icon && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Icon className="w-4 h-4" />
                </span>
            )}
        </div>

    );
}

export default Input;