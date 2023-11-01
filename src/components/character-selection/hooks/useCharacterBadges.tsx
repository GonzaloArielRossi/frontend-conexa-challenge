import { FaHeart, FaPassport } from 'react-icons/fa';

import { CHARACTER_STATUSES } from '@/config/constants';

export default function useCharacterBadges(
  characterStatus: string,
  characterSpecies: string
) {
  const getStatusBadgeColor = () => {
    if (characterStatus === CHARACTER_STATUSES.ALIVE) {
      return 'green';
    }
    if (characterStatus === CHARACTER_STATUSES.DEAD) {
      return 'red';
    }
    return 'gray';
  };

  //This function generates a random color based on the character species.
  // Same species will always generate the same color.
  const getSpeciesBadgeColor = () => {
    const candidateColors = [
      'blue',
      'cyan',
      'purple',
      'pink',
      'yellow',
      'red',
      'green'
    ];
    const idx =
      characterSpecies
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt(0), 0) %
      candidateColors.length;
    return candidateColors[idx];
  };

  const badges = [
    {
      id: 'species',
      backgroundColor: getSpeciesBadgeColor(),
      icon: FaPassport,
      label: 'Species',
      value: characterSpecies
    },
    {
      id: 'status',
      backgroundColor: getStatusBadgeColor(),
      icon: FaHeart,
      label: 'Status',
      value: characterStatus
    }
  ];

  return badges;
}
