export const Current = (href: string, currentPath: string) => {
  if (href === '/') {
    return href === currentPath;
  }

  return currentPath.startsWith(href);
};
