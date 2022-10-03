import './styles/app.scss';

import Header from './components/header';
import Map from './components/map';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="contents">
        <Map />
      </section>
      <Footer />
    </div>
  );
};

export default App;
