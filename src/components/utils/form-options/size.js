export const sizesOptions = [
    {
        label: '26 см.',
        prop: 'small'
    },
    {
        label: '30 см.',
        prop: 'medium'
    },
    {
        label: '40 см.',
        prop: 'large'
    }
]
export function calculateSizes(size) {
    switch (size) {
        case '26 см.':
            return 1
        case '30 см.':
            return 1.4
        case '40 см.':
            return 1.8
        default:
            return 1
    }
}