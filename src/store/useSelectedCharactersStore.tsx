import { create } from 'zustand';

import { Character } from '@/types/types';

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
        if (!character) {
          selectedCharacters[panelIdx] = undefined;
          return { selectedCharacters };
        }
        selectedCharacters[panelIdx] = character;
        return { selectedCharacters };
      });
    }
  })
);
