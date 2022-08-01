const PodcastCard = ({ podcast }) => {
  return (
    <div className="card">
      <img
        src={podcast.image.url}
        className="card-img-top"
        alt={podcast.title}
      />
      <div className="card-body">
        <h2 className="card-title">{podcast.title}</h2>
        <p className="card-text">{podcast.description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
