export const getBlogFormatDate = utcDate => {
  const date = new Date(utcDate);

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};
