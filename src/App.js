import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useScrollAnimation from './hooks/useScrollAnimation';
import HomePage from './components/HomePage/HomePage';
import Investments from './components/InvestmentPage/Investments';
import About from './components/AboutPage/About';
import Blog from './components/Blog/Blog';
import Contact from './components/ContactPage/Contact';
import InvestmentDetails from './components/InvestmentPage/InvestmentDetails';
import BlogDetails from './components/Blog/BlogDetails';

const App = () => {
  useScrollAnimation();

  return (
    <section className="app">
     <Header />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/investments" element={ <Investments /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/investment_details" element={ <InvestmentDetails /> } />
          <Route path="/blog_details" element={ <BlogDetails /> } />
        </Routes>

     <Footer />
    </section>
  );
}

export default App;