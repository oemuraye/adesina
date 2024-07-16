import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useScrollAnimation from './hooks/useScrollAnimation';

const App = () => {
  useScrollAnimation();

  return (
    <section className="app">
     <Header />
     <Footer />
    </section>
  );
}

export default App;