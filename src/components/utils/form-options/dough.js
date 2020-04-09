export const dougnOptions = [
    {
        label: 'традиционное',
        prop: 'traditional'
    },
    {
        label: 'тонкое',
        prop: 'thin'
    }
]
export function calculateDough(dough) {
    switch (dough) {
        case 'традиционное':
            return 20
        case 'тонкое':
            return 0
        default:
            return 0
    }
}