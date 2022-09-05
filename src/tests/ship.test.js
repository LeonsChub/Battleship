/* eslint-disable no-undef */
import { Ship } from '../ship';

test('Returns Ship as array', () => {
  const ship1 = Ship(3);
  expect(ship1.getShip()).toStrictEqual([1, 1, 1]);
});

test('is Ship sunk?', () => {
  const ship1 = Ship(3);
  expect(ship1.getSunk()).toBe(false);

  ship1.hit(0);
  ship1.hit(1);
  ship1.hit(2);

  expect(ship1.getSunk()).toBe(true);
});

test('can hit?', () => {
  const ship1 = Ship(5);
  ship1.hit(3);
  expect(ship1.getShip()).toStrictEqual([1, 1, 1, 0, 1]);
});
