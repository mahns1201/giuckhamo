const Artist = (props) => {
  const {
    location: { name, artistImage, href },
  } = props;

  return (
    <div id="artist">
      <div className="artist__image">
        <img src={artistImage} alt="artist" />
      </div>
      <div className="artist__name">성명: {name}</div>
    </div>
  );
};

export default Artist;
