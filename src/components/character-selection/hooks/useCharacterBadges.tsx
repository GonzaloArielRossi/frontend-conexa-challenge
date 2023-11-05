import { useCallback } from 'react';
import { FaHeart, FaMapPin, FaPassport } from 'react-icons/fa';

import { CHARACTER_STATUSES } from '@/config/constants';

export default function useCharacterBadges(
  characterStatus: string,
  characterSpecies: string,
  characterLocationName: string
) {
  const getStatusBadgeColor = useCallback((characterStatus: string) => {
    if (characterStatus === CHARACTER_STATUSES.ALIVE) {
      return 'green';
    }
    if (characterStatus === CHARACTER_STATUSES.DEAD) {
      return 'red';
    }
    return 'gray';
  }, []);

  const badges = [
    {
      id: 'species',
      backgroundColor: 'brandCyan',
      icon: FaPassport,
      label: 'Species',
      value: characterSpecies
    },
    {
      id: 'status',
      backgroundColor: getStatusBadgeColor(characterStatus),
      icon: FaHeart,
      label: 'Status',
      value: characterStatus
    },
    {
      id: 'locationName',
      backgroundColor: 'purple',
      icon: FaMapPin,
      label: 'Location',
      value: characterLocationName
    }
  ];

  return badges;
}
