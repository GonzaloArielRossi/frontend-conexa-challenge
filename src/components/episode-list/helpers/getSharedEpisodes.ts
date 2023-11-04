export default function getSharedEpisodes(
  leftEpisodes: string[],
  rightEpisodes: string[]
): string[] {
  if (leftEpisodes.length === 0 || rightEpisodes.length === 0) return [];

  const sharedEpisodes: string[] = [];

  let shortestArray = leftEpisodes;
  let longestArray = rightEpisodes;

  if (leftEpisodes.length > rightEpisodes.length) {
    shortestArray = rightEpisodes;
    longestArray = leftEpisodes;
  }

  shortestArray.forEach((episode) => {
    if (longestArray.includes(episode)) {
      sharedEpisodes.push(episode);
    }
  });

  return sharedEpisodes;
}
