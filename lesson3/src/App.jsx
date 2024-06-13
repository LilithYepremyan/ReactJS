import { useState } from "react";
import "./App.css";
import { Song } from "./Song";
import { Album } from "./Album";
import { SongList } from "./SongList";
import { PlayList } from "./PlayList";

function App() {
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony 1", artist: "Mozart", duration: 20 },
    { id: 102, title: "Symphony 2", artist: "Mozart", duration: 25 },
    { id: 103, title: "Symphony 3", artist: "Mozart", duration: 15 },
    { id: 104, title: "Symphony 4", artist: "Mozart", duration: 10 },
  ]);
  const [myPlayList, setMyPlayList] = useState([]);

  const removeSong = (id) => {
    setSongs(songs.filter((x) => x.id !== id));
  };

  const moveToPlaylist = (elm, id) => {
    if (!myPlayList.includes(elm)) {
      setMyPlayList((prev) => {
        console.log(prev, "prev");
        console.log(prev === myPlayList, "comp");
        return [...prev, elm];
      });
    }
  };

  const swapSong = () => {};

  return (
    <>
      {/* <Album name="American" year={2020}>
        <Song title="Hello" duration={3.5} artist="Adele" />
        <Song title="Hips don't lie" duration={5} artist="Shakira" />
        <Song title="Alive" duration={3.5} artist="Lara Fabian" />
      </Album> */}
      <SongList
        items={songs}
        onDelete={removeSong}
        onMove={moveToPlaylist}
        onSwap={swapSong}
      ></SongList>
      <PlayList
        items={songs}
        myPlayList={myPlayList}
        inPlaylist={true}
      ></PlayList>
    </>
  );
}

export default App;
