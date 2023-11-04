import { Fragment } from 'react';

import CharacterCard from '@/components/character-selection/CharacterCard';
import useCharacters from '@/components/character-selection/hooks/useCharacters';
import useCharacterSelection from '@/components/character-selection/hooks/useCharacterSelection';
import ApiErrorMessage from '@/components/feedback/ApiErrorMessage';
import EmptyResults from '@/components/feedback/EmptyResults';
import Loading from '@/components/feedback/Loading';
import useScrollToBottomAction from '@/hooks/useScrollToBottomAction';
import { Character, CharactersResponse } from '@/types/types';

export default function CharacterCards({
  characterPanelId,
  containerRef,
  searchTerm
}: {
  searchTerm: string;
  characterPanelId: number;
  containerRef: React.RefObject<HTMLUListElement>;
}) {
  const { handleSelectCharacter, selectedCharacters } = useCharacterSelection();

  const { data, fetchNextPage, hasNextPage, isError, isLoading } =
    useCharacters(searchTerm);

  useScrollToBottomAction(containerRef, fetchNextPage, 0);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ApiErrorMessage />;
  }

  if (data && Array.isArray(data.pages) && !data.pages[0].results) {
    return <EmptyResults message={`Oops! No results 🥲`} />;
  }

  if (
    data &&
    Array.isArray(data.pages) &&
    data.pages.length > 0 &&
    data.pages[0].results
  ) {
    return (
      <>
        {data.pages.map((page: CharactersResponse, idx) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={idx}>
              {page.results.map((character: Character) => {
                const isCurrentCharacterSelected =
                  selectedCharacters[characterPanelId]?.id === character.id;
                return (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    characterPanelId={characterPanelId}
                    isCurrentCharacterSelected={isCurrentCharacterSelected}
                    onSelectCharacter={handleSelectCharacter}
                  />
                );
              })}
            </Fragment>
          );
        })}
        {hasNextPage && <Loading size={'md'} />}
      </>
    );
  }
}
