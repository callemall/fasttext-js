import { execFile } from 'child_process';

import getFastTextPath from './getFastTextPath';

// inputTxt: string (filePath)
// outputModel: string (filePath)
const trainAsync = (dataPath, modelPath) =>
  new Promise((resolve, reject) => {
    // Remove .bin ext if exists (fastText adds .bin ext to filename)
    const output = modelPath.endsWith('.bin') ? modelPath.substring(0, modelPath.length - 4) : modelPath;

    execFile(getFastTextPath(), ['supervised', '-input', dataPath, '-output', output], (err) => {
      if (err) {
        if (err) {
          reject(err);
        }
        return;
      }

      resolve();
    });
  });

export default trainAsync;
