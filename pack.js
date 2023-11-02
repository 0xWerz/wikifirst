import admZip from 'adm-zip';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const zip = new admZip();
const distFolder = path.join(__dirname, 'dist');
zip.addLocalFolder(distFolder);
zip.writeZip(path.join(__dirname, 'chrome-extension.zip'));
console.log('PACK: Extension packed');
