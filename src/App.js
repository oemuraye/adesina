import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useScrollAnimation from './hooks/useScrollAnimation';
import HomePage from './components/HomePage/HomePage';
import Investments from './components/InvestmentPage/Investments';

const App = () => {
  useScrollAnimation();

  return (
    <section className="app">
     <Header />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/investments" element={ <Investments /> } />
        </Routes>

     <Footer />
    </section>
  );
}

export default App;