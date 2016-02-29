import 'babel-polyfill';
import React from 'react';
import SectionsCard from '../src/index';
import chai from 'chai';
import context from '../src/context';
chai.should();

/* eslint-disable newline-after-var */
describe('A SectionsCard', () => {
  describe('it\'s a React component', () => {
    it('is compatible with React.Component', () => {
      SectionsCard.should.be.a('function').and.respondTo('render');
    });
    it('it\'s renders a React element', () => {
      React.isValidElement(<SectionsCard data={context} />).should.equal(true);
    });
  });
});
