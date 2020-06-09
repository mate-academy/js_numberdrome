'use strict';
/* global require, describe, it, expect */

const { Numberdrome } = require('./Numberdrome');

describe('Numberdrome', () => {
  it('should create object', () => {
    const numberdrome = new Numberdrome();

    expect(numberdrome).toBeInstanceOf(Numberdrome);
  });

  it('.sum() should return correct sum', () => {
    const numberdrome = new Numberdrome();

    numberdrome.addNumber(7);
    numberdrome.addNumber(1);
    numberdrome.addNumber(5);
    numberdrome.addNumber(1);

    expect(numberdrome.sum()).toBe(14);
  });

  it('.product() should return correct product', () => {
    const numberdrome = new Numberdrome();

    numberdrome.addNumber(5);
    numberdrome.addNumber(2);
    numberdrome.addNumber(3);

    expect(numberdrome.product()).toBe(30);
  });

  it('.min() should return correct min number', () => {
    const numberdrome = new Numberdrome();

    numberdrome.addNumber(-1);
    numberdrome.addNumber(0);
    numberdrome.addNumber(-2);
    numberdrome.addNumber(6);

    expect(numberdrome.min()).toBe(-2);
  });

  it('.max() should return correct max number', () => {
    const numberdrome = new Numberdrome();

    numberdrome.addNumber(-1);
    numberdrome.addNumber(0);
    numberdrome.addNumber(-2);
    numberdrome.addNumber(6);

    expect(numberdrome.max()).toBe(6);
  });

  it('.removeNumber() should remove numbers from list', () => {
    const numberdrome = new Numberdrome();

    numberdrome.addNumber(7);
    numberdrome.addNumber(1);
    numberdrome.addNumber(5);
    numberdrome.addNumber(1);

    numberdrome.removeNumber(5);

    expect(numberdrome.sum()).toBe(9);

    numberdrome.removeNumber(1);

    expect(numberdrome.sum()).toBe(7);
  });
});
