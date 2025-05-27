import { createRequire } from "module";
import { join, dirname } from "path";

const require = createRequire(import.meta.url);

/**
 * Returns the absolute path to a package's directory.
 * @param {string} value - The package name.
 * @returns {string} The absolute path to the package directory.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

export default getAbsolutePath;
