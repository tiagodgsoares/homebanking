import fs from 'fs';
import path from 'path';

export default {
    saveJSONFile,
    readJSONFile,
}

const MODEL_PATH = '/server/model/'

/**
 * 
 * @param {object} data 
 */
function saveJSONFile(filePath, data) {

    return fs.writeFile(path.resolve(`./server/model/${filePath}`), data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

/**
 * 
 * @param {string} path 
 */
function readJSONFile(path) {
    return fs.readFileSync(path);
}
