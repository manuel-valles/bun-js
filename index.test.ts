import { describe, expect, test, beforeAll } from 'bun:test';

beforeAll(() => {
    console.log('running beforeAll');
});

describe('Bun', () => {
    test('should be awesome', () => {
        expect(true).toBeTruthy();
    });
})