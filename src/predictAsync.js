import { spawn } from 'child_process';

import getFastTextPath from './getFastTextPath';
import normalize from './normalize';

// model: string (filePath)
// sentences: arrayOf(string)
const predictAsync = (modelPath, sentences) =>
  new Promise((resolve, reject) => {
    const child = spawn(getFastTextPath(), ['predict-prob', modelPath, '-']);

    let stdout = '';

    let inputData = '';

    sentences.forEach((sentence) => {
      inputData += `${normalize(sentence)}\n`;
    });

    child.stdin.write(inputData);

    child.stdout.on('data', (data) => {
      stdout += String(data);
    });

    child.stdout.on('end', () => {
      const lines = stdout.trim().split('\n');

      const predictions = lines.map((line) => {
        const params = line.split(' ');
        const label = params[0].replace('__label__', '');
        const confidence = Number(params[1]);

        return { label, confidence };
      });

      resolve({ predictions });
    });

    child.on('error', (err) => {
      reject(err);
    });

    child.stdin.end();
  });

export default predictAsync;
