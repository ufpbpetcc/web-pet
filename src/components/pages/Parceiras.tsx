export function Parceiras() {
    return (
        <div className="flex w-full h-full py-10 px-30 box-border flex-col
            text-white font-inter items-center justify-center">
            <div className="font-lexend text-7xl font-bold w-1/2 text-center mb-10">Empresas que são parceiras</div>
            <div className="font-inter w-1/3 text-center text-xl">Esses são os responsáveis por dar assistência introduzindo os estudantes no mercado</div>
            <div className="grid w-full h-auto gap-20 grid-flow-col items-center justify-center my-20">
                <img src="vsoft.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="synchro.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="CI.png" className="object-contain"></img>
                <hr className="h-[30%] opacity-50" />
                <img src="UFPB.png" className="object-contain"></img>
            </div>
        </div>
    )
}
