import {expect, test, beforeEach, describe} from '@jest/globals'
import Ship from '../Domain/Ship';

let ship;

test("Create a submarine", () => {
    ship = new Ship("submarine");
    expect(ship.size).toBe(3);
});

test("Create a patrol", () => {
    ship = new Ship("patrol");
    expect(ship.size).toBe(2);
});

test("Create a carrier", () => {
    ship = new Ship("carrier");
    expect(ship.size).toBe(5);
});

test("Create a battleship", () => {
    ship = new Ship("battleship");
    expect(ship.size).toBe(4);
});

describe("Prove hits", () => {
    beforeEach(() => {
        ship = new Ship("submarine");
    })

    test("Hit the new ship", () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    });

    test("Sunk the ship", () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    })
});