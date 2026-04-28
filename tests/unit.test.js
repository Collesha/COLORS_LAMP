/**
 * @jest-environment jsdom
 */
const code = require('../public/js/code.js');

describe('readCookie', () => {
    test('should correctly parse userId from cookie string', () => {
        // Mock the document.cookie property
        Object.defineProperty(document, 'cookie', {
            writable: true,
            value: 'firstName=Albus,lastName=Dumbledore,userId=55',
        });

        // Mock window.location to prevent errors during the test
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { href: '' },
        });

        code.readCookie();
        
        // Check if the logic correctly parsed the ID
        expect(global.userId).toBe(55);
    });
});