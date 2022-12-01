import BgWave from '../../BgWave';
import '@fontsource/inter/variable.css';
import '@fontsource/lexend/variable.css';
import { MenuItem } from '../../MenuItem';
// @ts-ignore
import TypeIt from 'typeit-react';
import Header from '../../Header';

export function IntroPage() {
  return (
    <div className="w-full h-full relative bg-[#182240] text-white font-inter font-500 overflow-hidden">
      <Header />
      <div className="bg-[#2E3F70] w-[45vw] h-[45vw] rounded-full
          absolute right-1/3 bottom-0 translate-x-1/2 translate-y-1/4">
        <img src="Hero Img.png" alt="Petrúcio" className="absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-6/7 w-[45vw] w-[45vw]" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 pl-30 grid text-[#E1E 1E6] h-1/2">
        <div className="my-auto">
          <div className="text-[#A8A8B3] mb-6">Universidade Federal da Paraíba</div>
          <div className="text-5xl w-2/3 font-bold font-lexend my-3">
            <TypeIt options={{ speed: 85, cursorChar: "_" }}>
              Bem-vindo ao Universo do PET
            </TypeIt>
          </div>
          <div className="w-2/3">Aqui você fica por dentro de tudo, e conhece mais um pouco de tudo que acontece no PET!</div>
        </div>
        <div className="mt-auto">
          <button className="font-lexend px-10 py-3 bg-[#263B9C] rounded-full
              inline text-sm border-none text-white hover:scale-105 duration-200 fade-in-out
              transition-all cursor-pointer hover:bg-[#22358c]"
          >Conheça-nos</button>
        </div>
      </div>
    </div>
  )
}
