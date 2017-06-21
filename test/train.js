/* eslint-disable import/no-extraneous-dependencies */
/* global describe it */
const chai = require('chai');
chai.use(require('chai-fs'));

const path = require('path');

const { trainAsync } = require('../lib');

describe('trainAsync', () => {
  const inputTxt = path.resolve(__dirname, 'data.txt');

  it('should create model file (without .bin extension in filename)', (done) => {
    trainAsync(inputTxt, path.resolve(__dirname, 'country_test_1'))
      .then(() => {
        chai.assert.pathExists(path.resolve(__dirname, 'country_test_1.bin'));

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should create model file (with .bin extension in filename)', (done) => {
    trainAsync(inputTxt, path.resolve(__dirname, 'country_test_2.bin'))
      .then(() => {
        chai.assert.pathExists(path.resolve(__dirname, 'country_test_2.bin'));

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
