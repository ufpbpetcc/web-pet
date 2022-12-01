import { IntroPage } from './sections/IntroPage';
import { Descricao } from './sections/Descricao';
import { Noticias } from './sections/Noticias';
import { Parceiras } from './sections/Parceiras';
import { Footer } from './sections/Footer';

function Inicio() {
    return (
        <>
            <IntroPage />
            <Descricao />
            <Noticias />
            <Parceiras />
            <Footer />
        </>
    )
}

export default Inicio;