import { Pause, Play } from "./Player";
import { usePlayerStore } from "./store/playerStore";

export function CardPlayButton({ id }) {
  const {
    isPlayingPlayList,
    currentMusic,
    isPlaying,
    setIsPlaying,
    volume,
    setCurrentMusic,
  } = usePlayerStore(state => state);

  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false);
      return;
    }

    // setCurrentMusic({ playList: { id } });
    // setIsPlaying(!isPlaying);

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({
          songs,
          playlist,
          song: songs[0],
        });
        // setCurrentMusic({ playList: data });
      });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4">
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button>
  );
}
