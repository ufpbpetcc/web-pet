export function Noticia(props: { titulo: string, categoria: string, imagem?: string, destaque?: boolean, semImagem?: boolean }) {
    return (
        <>
            <div className={`w-full h-full bg-cover rounded-lg py-5 px-8 relative cursor-pointer group
                ${props.destaque ? "col-span-2 shadow-black/50 shadow-lg" : ""} ${props.semImagem ? "bg-blue-400" : ""}`}
                style={props.semImagem ? undefined : { backgroundImage: `url(${props.imagem})` }}>
                <div className="h-full w-full rounded-lg bg-black group-hover:opacity-20
                    transition-opacity box-border absolute top-0 left-0 ease-in-out duration-300"
                    style={{opacity: 0}} />
                <div className="absolute text-xl z-2">#{props.categoria}</div>
                <div className="absolute bottom-5 z-2">
                    <div className="text-3xl my-2 w-2/3">{props.titulo}</div>
                    <div className="text-xl font-semibold">Há 1 semana • 3 min de leitura</div>
                </div>
            </div>
        </>
    )
}