// import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getMarkers } from '../apis/markerApi';
import Artist from './artist';

const ArtistSub = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const locations = await getMarkers();
        console.log(locations);
        setLocations(locations);
      } catch (error) {
        console.log(error); //에러가 발생한 경우
      }
    };

    console.log(`locations: ${locations}`);

    fetchMarkers();
  }, []);

  const Artists = locations.map((location, index) => (
    <Artist location={location} key={index} />
  ));

  return (
    <div id="artist-sub">
      <div className="artist__container">{Artists}</div>
    </div>
  );
};

export default ArtistSub;
