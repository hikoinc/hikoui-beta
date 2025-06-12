function getContentUrl(flattenedPath: string, baseFolder = "docs") {
  const prefix = `${baseFolder}/`;

  if (flattenedPath.startsWith(prefix)) return `/${baseFolder}/${flattenedPath.slice(prefix.length)}`;

  return `/${flattenedPath}`;
}

export default getContentUrl;
