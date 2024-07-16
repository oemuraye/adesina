import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useScrollAnimation from './hooks/useScrollAnimation';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  useScrollAnimation();

  return (
    <section className="app">
     <Header />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
        </Routes>

     <Footer />
    </section>
  );
}

export default App;