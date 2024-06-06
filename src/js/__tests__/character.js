import { Character } from '../class/character.js';
import { Bowman } from '../class/bowman.js'
import { Swordsman } from '../class/swordsman.js';
import { Magician } from '../class/magician.js';
import { Daemon } from '../class/daemon.js';
import { Undead } from '../class/undead.js';
import { Zombie } from '../class/zombie.js';

test.each([
    ['Маг', Bowman, 'Bowman', 25, 25],
    ['Leo', Swordsman, 'Swordsman', 40, 10],
    ['Rom', Magician, 'Magician', 10, 40],
    ['Vlad', Daemon, 'Daemon', 10, 40],
    ['Alex', Undead, 'Undead', 25, 25],
    ['Sacha', Zombie, 'Zombie', 40, 10],
])('should create a %s character', (name, Class, expectedType, expectedAttack, expectedDefence) => {
    const character = new Class(name);
    expect(character.name).toBe(name);
    expect(character.type).toBe(expectedType);
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(expectedAttack);
    expect(character.defence).toBe(expectedDefence);
});

test('should throw error for invalid type', () => {
    expect(() => new Character('John', 'Warrior', 100, 1, 20, 20)).toThrowError(
        'Wrong type'
    );
});

test('should throw error for invalid name length - too short', () => {
    expect(() => new Character('J', 'Bowman', 100, 1, 20, 20)).toThrowError(
        'Name must be a string with a length between 2 and 10 characters'
    );
});

test('should throw error for invalid name length - too long', () => {
    expect(() => new Character('Johnathonon', 'Bowman', 100, 1, 20, 20)).toThrowError(
        'Name must be a string with a length between 2 and 10 characters'
    );
});

test('should throw error for invalid name type', () => {
    expect(() => new Character(123, 'Bowman', 100, 1, 20, 20)).toThrowError(
        'Name must be a string with a length between 2 and 10 characters'
    );
});

test('should throw error if not all arguments are provided', () => {
    expect(() => new Character('Test')).toThrow();
});