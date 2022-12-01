export function Parceiras() {
    return (
        <div className="h-full w-full flex items-center justify-center flex-col relative">
            <div className="flex w-full px-30 box-border flex-col
            text-white font-inter items-center justify-end">
                <div className="font-lexend text-7xl font-bold w-1/2 text-center mb-10">Empresas que são parceiras</div>
                <div className="font-inter w-1/3 text-center text-xl">Esses são os responsáveis por dar assistência introduzindo os estudantes no mercado</div>
            </div>
            <div className="grid w-full gap-10 grid-flow-col items-center justify-center">
                <img src="vsoft.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="synchro.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="CI.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="UFPB.png" className="object-contain"></img>
            </div>
            <hr className="w-full h-[1px] opacity-50 left-0 m-0 absolute bottom-0" />
        </div>
    )
}
