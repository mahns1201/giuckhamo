const Artist = (props) => {
  const {
    location: { name, imageSrc, href },
  } = props;

  return (
    <div id="artist">
      <div>{name}</div>
      <div>{imageSrc}</div>
      <div>{href}</div>
    </div>
  );
};

export default Artist;
