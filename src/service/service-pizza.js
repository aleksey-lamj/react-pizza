// Вместо сервера, получение данных 

export default class ServicePizza {
    data = [
        {
            id: 1,
            name: 'Аррива',
            price: 420,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/61e2f547-187a-4f73-95ff-078d4621c73c.jpg',
            categories: ['grill', 'meat'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium']
        },
        {
            id: 2,
            name: 'Пепперони-сердце',
            price: 695,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/c2059f73-f5ab-419f-9dae-5b4cb022695e.jpg',
            categories: ['meat'],
            dough: ['traditional'],
            sizes: ['medium', 'large']
        }, 
        {
            id: 3,
            name: 'Испанские колбаски',
            price: 345,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg',
            categories: ['meat', 'hot'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
        {   
            id: 4,
            name: 'Ветчина и сыр',
            price: 300,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/814ad4a5-44bd-4b65-86e2-e6c04e622fda.jpg',
            categories: ['meat'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
        {   
            id: 5,
            name: 'Пирог-сердце',
            price: 520,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1feab006-444c-4aa0-bf1c-82cc8ad10cc3.jpg',
            categories: ['sweetness', 'vega'],
            dough: ['thin'],
            sizes: ['medium', 'large']
        },
        {   
            id: 6,
            name: 'Новогодняя пицца',
            price: 405,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/95add3ad-d8ba-470a-b417-8e6a336056d9.jpg',
            categories: ['meat', 'sweetness'],
            dough: ['traditional', 'thin'],
            sizes: ['medium', 'large']
        },
        {   
            id: 7,
            name: 'Сырная',
            price: 245,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
            categories: ['vega'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
        {   
            id: 8,
            name: 'Четыре сыра',
            price: 450,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/7d770266-c779-4e9d-b2bf-aa741de13bed.jpg',
            categories: ['vega'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
        {   
            id: 9,
            name: 'Пицца-пирог',
            price: 345,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/54537b28-c154-414a-bfd5-fc5b993af275.jpg',
            categories: ['vega', 'sweetness'],
            dough: ['thin', 'traditional'],
            sizes: ['medium', 'large']
        },
        {   
            id: 10,
            name: 'Маргарита',
            price: 345,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
            categories: ['vega'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
        {   
            id: 11,
            name: 'Гавайская',
            price: 405,
            image: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/50bbe373-f791-4690-ace9-8e86421c77c0.jpg',
            categories: ['vega', 'grill'],
            dough: ['traditional', 'thin'],
            sizes: ['small', 'medium', 'large']
        },
    ]
    
    getAll() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.data)
            }, 1500)
        })
    }
} 