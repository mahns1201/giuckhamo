import './styles/app.scss';

import Header from './components/common/header';
import Footer from './components/common/footer';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="contents">
        <div className="test1">
          <a href="https://mahns-dev.notion.site/da619d4ed60a4d89af20af2593fc0cc2">
            링크
          </a>
        </div>

        <div className="test2">
          <a href="https://mahns-dev.notion.site/da619d4ed60a4d89af20af2593fc0cc2">
            링크
          </a>
        </div>

        <div className="test3">
          <a href="https://mahns-dev.notion.site/da619d4ed60a4d89af20af2593fc0cc2">
            링크
          </a>
        </div>

        <div className="test4">
          <a href="https://mahns-dev.notion.site/da619d4ed60a4d89af20af2593fc0cc2">
            링크
          </a>
        </div>

        <div className="test5">
          <a href="https://mahns-dev.notion.site/da619d4ed60a4d89af20af2593fc0cc2">
            링크
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
