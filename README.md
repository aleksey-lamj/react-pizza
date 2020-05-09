# React pizza

Возможность добавления пиццы в корзину, фильтрация по пиццам. Цена зависит от размера и теста. В корзине показана общая стоимать заказа, добавление и удаление пиццы.

[Посмотреть](https://aleksey-kaa.github.io/react-pizza/)
## Быстрый старт 

`git clone https://github.com/aleksey-kaa/react-pizza.git`

`npm install`

`npm run dev`


## Стек 

- React (hooks)
- Redux
- Webpack

## Описание 
***Реализован функционал, без адаптивности***

В кнопке  счетчик в котором подсчитывается сколько пицц вы заказали 

Если пиццы с одинаковым именем и разным тестом или размером, в корзине создается новый элемент

Цена зависит от размера и теста

**Если корзина пуста, то она не активна** 

`service-pizza.js` - в качестве сервера, получает данные с задержкой 1.5 сек.

Пример данных:
```
{
    id: 3,
    name: 'Испанские колбаски',
    price: 345,
    image: 'https://yandex.ru/images/',
    categories: ['meat', 'hot'],
    dough: ['traditional', 'thin'],
    sizes: ['small', 'medium', 'large']
}
```
Компонент `<RadioButton />`  обрабаывает `dough` и `sizes`, получает первым элемент и делает его активным, если в массиве отсутствует значение, кнопка становится не активной и блокируется
```

let active = ''

    for (let i = 0; i < list.length; i++) {
        if (property.includes(list[i].prop)) {
            active = list[i].label
            break;
        }
    }

const [state, setState] = useState(active)

 ```
