import { DescriptionItem } from "../../DescriptionItem";

export function Descricao() {
    return (
        <>
            <div className="flex w-full bg-[#182240] z-1 py-10 px-30 box-border
                text-white font-inter h-1/2">
                <div className="w-full grid grid-flow-col my-auto">
                    <div>
                        <div className="mb-10 font-lexend text-5xl font-bold w-full">Conheça o PET Computação</div>
                        <div className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisi facilisis, auctor dolor vitae, rutrum lacus. Sed congue rhoncus ex, non elementum dui tempus in. Maecenas malesuada magna ac finibus maximus. Duis aliquet auctor sem, porta vulputate velit faucibus ac. Aliquam vel quam nisi.</div>
                    </div>
                    <div className="bg-white rounded-full w-50 h-50 text-center
                    text-black flex justify-center items-center mr-20">
                        <span className="text-xl">PETRUCIO PENSANDO</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#182240] grid grid-flow-col gap-9 h-1/2 w-full
                px-30 pb-20 box-border text-white">
                <DescriptionItem title="Pesquisa" />
                <DescriptionItem title="Ensino" />
                <DescriptionItem title="Extensão" />
            </div>
        </>
    )
}
