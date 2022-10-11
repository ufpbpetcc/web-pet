// import { useState } from 'react';
import BgWave from './components/BgWave';
import './App.css';
import '@fontsource/inter/variable.css';
import '@fontsource/lexend/variable.css';
import { MenuItem } from './components/MenuItem';
import { Noticias } from './components/Noticias';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-full relative bg-[#182240] text-white font-inter font-500 -z-1"
        /* TODO: achar uma maneira dos peixes se repetirem que nem no figma. */
        style={{ backgroundImage: "url(fish.svg)" }}>
        <BgWave />
        {/* TODO: remover display: absolute do menu. */}
        <div className="grid grid-flow-col absolute pt-7 px-50 w-full box-border">
          <img src="PET-Logo.png" alt="Logo do PET Ciência da Computação" className="mr-auto -ml-20" />
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
        <div className="bg-[#2E3F70] w-[45vw] h-[45vw] rounded-full absolute right-1/3 bottom-0 translate-x-1/2 translate-y-1/4">
          <img src="Hero Img.png" alt="Petrúcio" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6/7 w-[45vw] w-[45vw]" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 ml-14 grid text-[#E1E1E6] h-1/2">
          <div className="my-auto">
            <div className="text-[#A8A8B3] mb-4">Universidade Federal da Paraíba</div>
            <div className="text-5xl w-2/3 font-bold font-lexend my-3">Bem-vindo ao Universo do PET!</div>
            <div className="w-2/3">Aqui você fica por dentro de tudo, e conhece mais um pouco de tudo que acontece no PET!</div>
          </div>
          <div className="mt-auto">
            <button className="font-lexend px-8 py-3 bg-[#263B9C] rounded-full inline text-sm shadow-md border-none text-white hover:scale-105 transition-transform cursor-pointer">Conheça-nos</button>
          </div>
        </div>
      </div>
      <Noticias />
    </>
    )
}

export default App;
