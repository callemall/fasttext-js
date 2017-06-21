/* eslint-disable import/no-extraneous-dependencies */
/* global describe it */
const chai = require('chai');
chai.use(require('chai-fs'));

const path = require('path');

const { predictAsync } = require('../lib');

describe('predictAsync', () => {
  it('should return valid predictions', (done) => {
    const cities = ['Ha Noi', 'Vinh Long'];
    predictAsync(path.resolve(__dirname, 'country.bin'), cities)
      .then(({ predictions }) => {
        predictions.forEach((prediction) => {
          chai.expect(prediction.label).to.equal('VIETNAM');
          chai.expect(prediction.confidence).to.equal(0.5);
        });

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
