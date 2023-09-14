import {describe, expect, test, beforeEach} from '@jest/globals';
import Board from "../Domain/Board";

let board;

beforeEach(() => {
    board = new Board();
})

test("Created board with cells", () => {
    expect(board.rows.length).toEqual(10);
    board.rows.forEach(row => {
        expect(row.length).toBe(10);
        row.forEach(cell => {
            expect(cell).toEqual({
                shooted : false,
                boat : null,
                blocked: false,
            })
        })
    })
});

test("Place vertical ship", () => {
    expect(board.placeShip("submarine", 0, 0, 0)).toBeTruthy();
    expect(board.rows[0][0].boat.size).toEqual(3);
    expect(board.rows[1][0].boat.size).toEqual(3);
    expect(board.rows[2][0].boat.size).toEqual(3);
    expect(board.rows[3][0].boat).toBeFalsy();
});

test("Place vertical ship on the limit", () => {
    expect(board.placeShip("submarine", 0, 7, 9)).toBeTruthy();
});

test("Place vertical ship out of range", () => {
    expect(board.placeShip("submarine", 0, 8, 8)).toBe(false);
    expect(board.rows[8][8].boat).toBeFalsy();
});

test("Place horizontal ship", () => {
    expect(board.placeShip("submarine", 1, 0, 0)).toBeTruthy();
    expect(board.rows[0][0].boat.size).toEqual(3);
    expect(board.rows[0][1].boat.size).toEqual(3);
    expect(board.rows[0][2].boat.size).toEqual(3);
    expect(board.rows[0][3].boat).toBeFalsy();
});

test("Place horizontal ship on the limit", () => {
    expect(board.placeShip("submarine", 1, 9, 7)).toBeTruthy();
});

test("Place horizontal ship out of range", () => {
    expect(board.placeShip("submarine", 1, 8, 8)).toBe(false);
    expect(board.rows[8][8].boat).toBeFalsy();
});

describe("Function that need a ship", () => {
    beforeEach(() => {
        board.placeShip("submarine", 0, 0, 0);
    });

    test("Attacking a ship", () =>{
        expect(board.receiveAttack(0,0)).toBeTruthy();
        expect(board.rows[0][0].boat.hits).toBe(1);
    });

    test("Missed attack", () => {
        expect(board.receiveAttack(1,1)).toBe(false);
        expect(board.rows[1][1].shooted).toBe(true);
    })

    test("Attack cell already shooted", () => {
        board.receiveAttack(1,1);
        expect(() => board.receiveAttack(1,1)).toThrow();
    });

    test("Not all ships sunk", () =>{
        expect(board.shipsRemain()).toBe(true);
    });

    test("All ships sunk", () => {
        board.receiveAttack(0,0);
        board.receiveAttack(1,0);
        board.receiveAttack(2,0);
        expect(board.shipsRemain()).toBe(false);
    });
})

describe("Placing ships", () =>{
    beforeEach(() => {
        board.placeShip("submarine", 0, 0, 1);
    });

    test("Placing a ship on a ship", () => {
        expect(board.placeShip("carrier", 1, 0, 0)).toBe(false);
        expect(board.rows[0][0].boat).toBeFalsy();
    });

    test("Placing a ship next to another", () => {
        expect(board.placeShip("carrier", 0, 3, 2)).toBe(false);
        expect(board.rows[3][2].boat).toBeFalsy();
    });
})

