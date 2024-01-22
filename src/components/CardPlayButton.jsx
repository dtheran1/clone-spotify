import { Pause, Play } from "./Player";
import { usePlayerStore } from "./store/playerStore";

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, volume, setCurrentMusic } =
    usePlayerStore(state => state);

  const handleClick = () => {
    setCurrentMusic({ playList: { id } });
    setIsPlaying(!isPlaying);
  };

  const isPlayingPlayList = isPlaying && currentMusic?.plaList.id === id;

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4">
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button>
  );
}
