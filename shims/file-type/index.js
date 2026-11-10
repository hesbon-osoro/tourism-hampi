'use strict';
// Gatsby 5 (gatsby-core-utils, gatsby-source-filesystem) calls file-type 16's fromFile/fromBuffer.
// file-type 21 renamed them and is ESM-only; Node >= 22.12 can require() it.
const ft = require('file-type-esm');

module.exports = {
  fromFile: ft.fileTypeFromFile,
  fromBuffer: ft.fileTypeFromBuffer,
  fromStream: ft.fileTypeFromStream,
  fromTokenizer: ft.fileTypeFromTokenizer,
};
