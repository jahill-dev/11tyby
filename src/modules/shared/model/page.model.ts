/* -----------------------------------
 *
 * IPage
 *
 * -------------------------------- */

interface IPage {
  getAssetContents: (file: string) => string;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IPage };