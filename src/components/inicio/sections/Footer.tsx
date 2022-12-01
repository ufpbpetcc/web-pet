export function Footer() {
    return (
        <div className="w-full h-full grid grid-rows-5">
            <div className="row-span-3 grid place-items-center text-white font-lexend">
                <div className="absolute z-7 text-2xl w-2/5 font-bold left-[14%]">Contribua com esse time, e seja um de nossos parceiros, projetos e eventos estruturados levando a tecnologia a um próximo nível.</div>
                <div className="w-[80%] h-[50%] rounded-xl relative overflow-hidden bg-[#285E6C]">
                    <div className="absolute right-2/10 w-45 h-12 bg-black/40 rounded-full z-6
                        top-1/2 -translate-y-1/2 transform translate-x-1/2 flex items-center justify-center
                        text-center cursor-pointer hover:scale-105 transition-transform">
                        <div className="i-fa6-solid:code mr-5 text-2xl"></div>
                        Contribuir
                    </div>
                    <div className="absolute right-2/10 w-75 h-75 bg-[#4EC5E3] rounded-full z-5
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                    <div className="absolute right-2/10 w-110 h-110 bg-[#49B7D3] rounded-full z-4
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                    <div className="absolute right-2/10 w-150 h-150 bg-[#45AAC5] rounded-full z-3
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                    <div className="absolute right-2/10 w-250 h-250 bg-[#3E9AB1] rounded-full z-2
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                    <div className="absolute right-2/10 w-380 h-380 bg-[#388BA0] rounded-full z-1
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                    <div className="absolute right-2/10 w-550 h-550 bg-[#2E6E7E] rounded-full
                        top-1/2 -translate-y-1/2 transform translate-x-1/2"></div>
                </div>
            </div>
            <div className="row-span-2 bg-[#1F2B53] px-20 overflow-hidden
                text-white font-montserrat flex items-center">
                <div className="grid grid-cols-9">
                    <div className="col-span-4">
                        <div className="inline-flex justify-center mb-10 mt-20">
                            <img src="Hero Img.png" alt="Hero Img" className="h-180px" />
                            <div className="ml-10 font-bold text-3xl">PET<br />Computação<br/>
                            <span className="text-sm font-normal">PET Computação 2022.<br/>Todos os direitos reservados.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center gap-5">
                        <div className="font-bold">Contato</div>
                        <div>R. dos Escoteiros, s/n - Mangabeira, João Pessoa - PB, 58055-000</div>
                        <div>petcc@ci.ufpb.br</div>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center gap-5 mx-2">
                        <div className="font-bold">Projetos</div>
                        <div>Pesquisa</div>
                        <div>Ensino</div>
                        <div>Extensão</div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center gap-5 mx-2">
                        <div className="font-bold">Sobre</div>
                        <div>O PET Computação</div>
                        <div>Equipe</div>
                        <div>Processo Seletivo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
