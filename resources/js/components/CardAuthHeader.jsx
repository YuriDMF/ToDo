function CardAuthHeader({title, subtitle}) {
    return (
        <div className="text-center">
            <img src="/img/brand.png" className="w-[50px] mb-10 mx-auto" />
            <h1 className="text-neutral-100 text-3xl font-medium mb-2">{title}</h1>
            <span className="text-neutral-400">{subtitle}</span>
        </div>
    );
}

export default CardAuthHeader;