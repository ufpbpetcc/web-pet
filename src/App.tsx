import { IntroPage } from './components/pages/IntroPage';
import { Descricao } from './components/pages/Descricao';
import { Noticias } from './components/pages/Noticias';
import { Parceiras } from './components/pages/Parceiras';
import { Footer } from './components/pages/Footer';
import './App.css';

function App() {
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

export default App;