function Button({ children, className = '', ...props }){
    return (
        <button 
            className={`${className} cursor-pointer bg-zinc-600 hover:bg-zinc-700 hover:shadow-lg transition-all duration-500 ease-in-out py-3 mt-5 rounded-md text-neutral-200`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;