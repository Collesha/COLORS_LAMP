/**
 * @jest-environment jsdom
 */
const code = require('../public/js/code.js');

describe('readCookie', () => {
    test('should correctly parse userId from cookie string', () => {
        // Mock the document.cookie property
        Object.defineProperty(document, 'cookie', {
            writable: true,
            value: 'firstName=Anna,lastName=Lee,userId=55',
        });

        const locationSpy = jest.spyOn(window, 'location', 'get').mockReturnValue({
            href: ''
        });

        code.readCookie();
        
        // Check if the logic correctly parsed the ID
        expect(global.userId).toBe(55);
        locationSpy.mockRestore();
    });
});