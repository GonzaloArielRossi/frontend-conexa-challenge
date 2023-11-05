import { RefObject } from 'react';
import { create } from 'zustand';

type SelectedCharactersRefStore = {
  selectedCharactersRef: (RefObject<HTMLDivElement> | undefined)[];
  setSelectedCharactersRef: (
    panelIdx: number,
    characterRef?: RefObject<HTMLDivElement> | undefined
  ) => void;
};

export const useSelectedCharactersRefStore =
  create<SelectedCharactersRefStore>()((set) => ({
    selectedCharactersRef: [],
    setSelectedCharactersRef: (panelIdx, characterRef) => {
      set((state) => {
        const selectedCharactersRef = [...state.selectedCharactersRef];
        if (!characterRef) {
          selectedCharactersRef[panelIdx] = undefined;
          return { selectedCharactersRef };
        }
        selectedCharactersRef[panelIdx] = characterRef;
        return { selectedCharactersRef };
      });
    }
  }));
