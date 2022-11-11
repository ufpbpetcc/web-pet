import { DescriptionItem } from "../DescriptionItem";

export function Descricao() {
    return (
        <>
            <div className="flex w-full bg-[#182240] z-1 py-10 px-30 box-border
                text-white font-inter h-1/2">
                <div>
                    <div className="mb-10 font-lexend text-5xl font-bold w-1/2">Conheça o PET Computação</div>
                    <div className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisi facilisis, auctor dolor vitae, rutrum lacus. Sed congue rhoncus ex, non elementum dui tempus in. Maecenas malesuada magna ac finibus maximus. Duis aliquet auctor sem, porta vulputate velit faucibus ac. Aliquam vel quam nisi. Pellentesque viverra dui nec lorem interdum, sed accumsan ipsum pellentesque. Nullam vulputate condimentum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisi facilisis, auctor dolor vitae, rutrum lacus. Sed congue rhoncus ex, non elementum dui tempus in. Maecenas malesuada magna ac finibus maximus. Duis aliquet auctor sem, porta vulputate velit faucibus ac. Aliquam vel quam nisi. Pellentesque viverra dui nec lorem interdum, sed accumsan ipsum pellentesque. Nullam vulputate condimentum fringilla. </div>
                </div>
                <div className="flex items-center justify-center mr-10">
                    <div className="bg-white rounded-full w-50 h-50 text-center
                    text-black flex justify-center items-center">
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
