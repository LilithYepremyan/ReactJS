import { useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([
    {
      id: 101,
      url: "https://wallpapers.com/images/featured/prague-l8aujv2epf7ojy0r.jpg",
    },
    { id: 102, url: "https://images8.alphacoders.com/374/374028.jpg" },
    {
      id: 103,
      url: "https://images7.alphacoders.com/487/thumb-1920-487159.jpg",
    },
    {
      id: 104,
      url: "https://wallpapers.com/images/hd/prague-church-at-dawn-500ebpx4fnhzqxni.jpg",
    },
    {
      id: 105,
      url: "https://wallpapers.com/images/hd/prague-churches-and-spires-kr2ll9pmha86r9tt.jpg",
    },
    {
      id: 106,
      url: "https://c4.wallpaperflare.com/wallpaper/150/315/757/prague-czechia-czech-republic-europe-wallpaper-preview.jpg",
    },
    { id: 107, url: "https://wallpapers-hub.art/wallpaper-images/41279.jpg" },
    { id: 108, url: "https://wallpaper.dog/large/20388524.jpg" },
  ]);

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(photos.length - 1);
    }
  };

  const handleImage = (index) => {
    setIndex(index);
  };

  return (
    <>
      <img alt="img" id="main" src={photos[index].url} />
      <div>
        <button onClick={handlePrev}>&larr;</button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
      <div id="timeline">
        {photos.map((elm, i) => {
          const style = i == index ? "active" : "";

          return (
            <img
              src={elm.url}
              key={elm.id}
              className={style}
              onClick={() => {
                handleImage(i);
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
}

export default App;
