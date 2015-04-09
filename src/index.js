import fsp from 'fs-promise';
import chunker from './chunk';
import polyfill from 'babel/polyfill';

function chunk(code, options) {
  return chunker(code, options);
}

function chunkFile(filepath) {
  return fsp.readFile(filepath, { encoding: 'utf8' })
    .then(code => chunk(code, { source: filepath }));
}

export default {
  chunk,
  chunkFile
}
