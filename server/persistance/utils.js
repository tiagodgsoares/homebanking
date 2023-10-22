import fs from 'fs';
import path from 'path';

export default {
    saveJSONFile,
    readJSONFile,
}

const MODEL_PATH = '/server/model/';

/**
 * Saves data to a system file. 
 *
 * @param {string} filePath - The file name to save.
 * @param {object} data     - The data to be saved.
 */
function saveJSONFile(filePath, data) {

    return fs.writeFile(path.resolve(`./server/model/${filePath}`), data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

/**
 * Reads a system file.
 * 
 * @param {string} filePath - The file name to read.
 */
function readJSONFile(filePath) {
    return fs.readFileSync(`./server/model/${filePath}`);
}
