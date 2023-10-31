export const elipsis = (text: string, length: number = 30) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};
