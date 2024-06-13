import { Song } from "./Song";

export const PlayList = ({
  items,
  onDelete,
  myPlayList,
  onSwap,
  inPlaylist,
}) => {
  console.log(items, "songlist");
  return (
    <div className="wrapper">
      <h3>Play List</h3>
      <div className="playListContainer">
        {myPlayList.map((elm) => (
          <Song
            key={elm.id}
            song={elm}
            onDelete={onDelete}
            onSwap={onSwap}
            inPlaylist={true}
          ></Song>
        ))}
      </div>
    </div>
  );
};
