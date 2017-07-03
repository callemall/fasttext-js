# fasttext-js

[![npm package](https://img.shields.io/npm/v/fasttext-js.svg?style=flat-square)](https://www.npmjs.org/package/fasttext-js)
[![Build Status](https://travis-ci.org/callemall/fasttext-js.svg?branch=master)](https://travis-ci.org/callemall/fasttext-js)

Node.js interface for fastText

### Setup
We can install `fasttext-js` locally by running:
```bash
npm install --save fasttext-js
```
or
```bash
yarn add fasttext-js
```

### Usage
```js
import { predictAsync, trainAsync } from 'fasttext-js';

const dataPath = './inbound.txt';
/* inbound.txt content
Opt in __label__N
Opt out __label_Y
Hello __label__N
...
*/
const modelPath = './model.bin';

// Train supervised text classifiers
trainAsync(dataPath, modelPath)
  .then(() => {
    const messages = [
      'Opt in',
      'Opt out'
    ];

    // Obtain the most likely label for an array of of sentences with confidence rate
    return predictAsync(modelPath, messages);
  })
  .then(({ predictions }) => {
    console.log(predictions);
    /*
    "predictions": [
        {
            "label": "N",
            "confidence": 0.986328
        },
        {
            "label": "Y",
            "confidence": 0.693359
        }
    ]
    */
  })
  .catch((err) => {
    console.log(err);
  });
```

### References
Train supervised text classifiers with txt file at `dataPath` and store model to `modelPath`.
```js
trainAsync(dataPath, modelPath) // > Promise
```
Obtain the most likely label for an array of of `sentences` with confidence rate using model at `modelPath`.
```js
predictAsync(modelPath, sentences) // > Promise
```
