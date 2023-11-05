import getSharedEpisodes from '../helpers/getSharedEpisodes';
import {
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6
} from './SampleData';

describe('getSharedEpisodes', () => {
  it('should return the strings in common between 2 arrays of strings', () => {
    expect(getSharedEpisodes(sample1, sample2)).toEqual([]);
    expect(getSharedEpisodes(sample1, sample4)).toEqual([]);
    expect(getSharedEpisodes(sample4, sample5)).toEqual([]);
    expect(getSharedEpisodes(sample1, sample6)).toEqual([
      'https://rickandmortyapi.com/api/episode/1'
    ]);
    expect(getSharedEpisodes(sample1, sample3)).toEqual([
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3'
    ]);
  });
});
