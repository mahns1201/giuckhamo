import './styles/app.scss';

import Header from './components/common/header';
import Footer from './components/common/footer';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="contents">test</div>

      <Footer />
    </div>
  );
};

export default App;
