import { create } from "zustand";

export const usePlayerStore = create((set, get) => ({
  isPlaying: false,
  currentMusic: {
    playlist: null,
    song: null,
    songs: null,
  },
  volume: 1,
  setVolume: volume => set({ volume }),
  setIsPlaying: isPlaying => set({ isPlaying }),
  setCurrentMusic: currentMusic => set({ currentMusic }),
}));
