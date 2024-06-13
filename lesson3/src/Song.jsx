export const Song = ({ song, onDelete, onMove, onSwap, inPlaylist }) => {
  const { title, id, duration, artist } = song;
  return (
    <div className="song">
      <p>{title}</p>
      <strong>By {artist}</strong>
      <small> {duration} mins</small>
      <button onClick={() => onDelete(id)}>Delete</button>

      <button
        onClick={
          inPlaylist
            ? () => {
                () => onSwap();
              }
            : () => onMove(song, id)
        }
      >
        {inPlaylist ? "Down Up" : "Move"}
      </button>
    </div>
  );
};
