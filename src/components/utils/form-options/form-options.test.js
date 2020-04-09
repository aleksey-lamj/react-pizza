import { calculateDough, calculateSizes } from './index'

describe('Form options', () => {
    test('calculateDough', () => {
        expect(calculateDough('традиционное')).toBe(20)
        expect(calculateDough('тонкое')).toBe(0)
        expect(calculateDough('')).toBe(0)
        expect(calculateDough('small')).toBe(0)
    })
    test('calculateSizes', () => {
        expect(calculateSizes('26 см.')).toBe(1)
        expect(calculateSizes('30 см.')).toBe(1.4)
        expect(calculateSizes('40 см.')).toBe(1.8)
        expect(calculateSizes(40)).toBe(1)
        expect(calculateSizes('lorem')).toBe(1)
    })
})
