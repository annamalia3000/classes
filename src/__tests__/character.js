import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character';

test.each([
    ['Маг', Bowman, 'Bowman', 100, 1, 25, 25],
    ['Leo', Swordsman, 'Swordsman', 100, 1, 40, 10],
    ['Rom', Magician, 'Magician', 100, 1, 10, 40],
    ['Vlad', Daemon, 'Daemon', 100, 1, 10, 40],
    ['Alex', Undead, 'Undead', 100, 1, 10, 4],
    ['Sacha', Zombie, 'Zombie', 100, 1, 40, 10],
])('should create a %s character', (name, CharacterClass, expectedType, expectedHealth = 100, expectedLevel = 1, expectedAttack, expectedDefence) => {
    const character = new CharacterClass(name);
    expect(character.name).toBe(name);
    expect(character.type).toBe(expectedType);
    expect(character.health).toBe(expectedHealth);
    expect(character.level).toBe(expectedLevel);
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