import BgWave from "./BgWave";
import { MenuItem } from "./MenuItem";

export function Header() {
    return (
        <>
            <div className="absolute w-[140%] h-[140%] rotate-[-35deg] overflow-x-hidden"
                style={{ backgroundImage: "url(fish.svg)" }} />
            <BgWave />
            <div className="grid grid-flow-col absolute pt-7 px-30 w-full box-border">
                <img src="Logo.svg" alt="Logo do PET Ciência da Computação" className="mr-auto" />
                <div className="ml-auto grid grid-flow-col gap-10 place-items-center text-decoration-none children:cursor-pointer">
                    <MenuItem selected={true} text="Início" href="" />
                    <MenuItem selected={false} text="História" href="" />
                    <MenuItem selected={false} text="Time" href="" />
                    <MenuItem selected={false} text="Projetos" href="" />
                    <MenuItem selected={false} text="SDC" href="" />
                    <hr className="h-1/2 bg-white" />
                    <MenuItem selected={false} text="Artigos" href="" />
                </div>
            </div>
        </>
    )
}

export default Header;