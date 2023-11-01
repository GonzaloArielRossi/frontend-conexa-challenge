import { create } from 'zustand';

import { Character } from '@/types/api';

type SelectedCharactersStore = {
  selectedCharacters: (Character | undefined)[];
  setSelectedCharacters: (panelIdx: number, character?: Character) => void;
};

export const useSelectedCharactersStore = create<SelectedCharactersStore>()(
  (set) => ({
    selectedCharacters: [],
    setSelectedCharacters: (panelIdx, character) => {
      set((state) => {
        const selectedCharacters = [...state.selectedCharacters];
        selectedCharacters[panelIdx] = character;
        return { selectedCharacters };
      });
    }
  })
);
