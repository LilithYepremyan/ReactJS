import { Song } from "./Song";

export const SongList = ({ items, onDelete, onMove, onSwap }) => {
  return (
    <div>
      {items.map((elm) => (
        <Song
          key={elm.id}
          song={elm}
          onDelete={onDelete}
          onMove={onMove}
          onSwap={onSwap}
        />
      ))}
    </div>
  );
};
