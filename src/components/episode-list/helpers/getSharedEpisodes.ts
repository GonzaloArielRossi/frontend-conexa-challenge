export default function getSharedEpisodes(
  leftEpisodes: string[],
  rightEpisodes: string[]
): string[] {
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
