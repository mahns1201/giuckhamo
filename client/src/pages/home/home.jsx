// import { useNavigate } from 'react-router-dom';

import Map from '../../components/map';
import ArtistMain from '../../components/artistMain';
import ArtistSub from '../../components/artistSub';

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div id="home">
      <section className="top">
        <Map />
        <ArtistMain />
      </section>
      <section className="bottom">
        <ArtistSub />
      </section>
    </div>
  );
};

export default Home;
