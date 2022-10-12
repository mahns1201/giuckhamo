import './styles/app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
