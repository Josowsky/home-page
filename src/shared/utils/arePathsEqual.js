export const arePathsEqual = (firstPath, secondPath) =>
  firstPath.split('/').join('') === secondPath.split('/').join('');
