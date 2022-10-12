export function Noticias() {
    return (
        <div className="bg-[#182240] w-full h-full text-white px-30 py-10 items-center">
            <div className="font-montserrat font-bold text-3xl">Últimas Notícias</div>
            <div className="grid grid-cols-3 w-full h-full gap-3 py-10">
                <div className="w-full h-full bg-[url(noticia-1.png)] bg-cover rounded-lg col-span-2"></div>
                <div className="w-full h-full bg-white rounded-lg"></div>
                <div className="w-full h-full bg-white rounded-lg"></div>
                <div className="w-full h-full bg-white rounded-lg"></div>
                <div className="w-full h-full bg-white rounded-lg"></div>
            </div>
        </div>
    )
}