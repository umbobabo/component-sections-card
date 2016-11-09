import 'babel-polyfill';
import React from 'react';
import SectionsCard from '../src/index';
import chai from 'chai';
chai.should();

describe('A SectionsCard', () => {
  describe('it\'s a React component', () => {
    it('is compatible with React.Component', () => {
      SectionsCard.should.be.an('object');
    });
    it('it\'s renders a React element', () => {
      React.isValidElement(<SectionsCard.Main className="customName" />).should.equal(true);
    });
  });
});
