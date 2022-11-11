import { Noticia } from "../Noticia";

export function Noticias() {
    return (
        <div className="w-full h-full text-white px-30 py-10 items-center relative">
            <hr className="w-full h-[1px] opacity-50 absolute left-0 top-0 m-0" />
            <div className="font-montserrat font-bold text-3xl mt-5 mb-5">Últimas Notícias</div>
            <div className="grid grid-cols-3 w-full h-[85%] gap-5
                font-montserrat font-extrabold text-[#010027]">
                <Noticia imagem="noticia-1.png" categoria="categoria" titulo="Título da Notícia Destaque" destaque={true} />
                <Noticia imagem="noticia-2.png" categoria="artigos" titulo="Poesia, café e linhas de código" />
                <Noticia imagem="noticia-3.png" categoria="artigos" titulo="Inteligência canina em..." />
                <Noticia imagem="noticia-4.png" categoria="podcast" titulo="Ep. 6 está no ar!" />
                <Noticia categoria="categoria" titulo="Título da Notícia" semImagem={true} />
            </div>
            <div className="w-full bottom-0 left-0 absolute">
                <div className="flex items-center justify-center text-white font-inter flex pb-8">
                    <div className="i-fa6-solid:arrow-left cursor-pointer" />
                    <div className="mx-8">página 2 de 3</div>
                    <div className="i-fa6-solid:arrow-right cursor-pointer" />
                </div>
                <hr className="w-full h-[1px] opacity-50 left-0 m-0" />
            </div>
        </div>
    )
}