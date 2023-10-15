const dataDishes = [
    {
        id: 1,
        price: 16.99,
        img: 'fish01',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 2,
        price: 14.99,
        img: 'meat01',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 3,
        price: 12.99,
        img: 'pasta01',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 4,
        price: 8.99,
        img: 'pizza01',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 5,
        price: 10.99,
        img: 'salad01',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 6,
        price: 6.99,
        img: 'soup01',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 7,
        price: 14.99,
        img: 'fish02',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 8,
        price: 13.99,
        img: 'meat02',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 9,
        price: 10.99,
        img: 'pasta02',
        name: 'Pasta',
        category: 'PASTA'
    },    {
        id: 10,
        price: 12.99,
        img: 'pizza02',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 11,
        price: 11.99,
        img: 'salad02',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 12,
        price: 8.99,
        img: 'soup02',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 13,
        price: 17.99,
        img: 'fish03',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 14,
        price: 16.99,
        img: 'meat03',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 15,
        price: 9.99,
        img: 'pasta03',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 16,
        price: 8.99,
        img: 'pizza03',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 17,
        price: 10.99,
        img: 'salad03',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 18,
        price: 11.99,
        img: 'soup03',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 19,
        price: 19.99,
        img: 'fish04',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 20,
        price: 18.99,
        img: 'meat04',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 21,
        price: 14.99,
        img: 'pasta04',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 22,
        price: 12.99,
        img: 'pizza04',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 23,
        price: 14.99,
        img: 'salad04',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 24,
        price: 11.99,
        img: 'soup04',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 25,
        price: 19.99,
        img: 'fish05',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 26,
        price: 18.99,
        img: 'meat05',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 27,
        price: 10.99,
        img: 'pasta05',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 28,
        price: 12.99,
        img: 'pizza05',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 29,
        price: 14.99,
        img: 'salad05',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 30,
        price: 7.99,
        img: 'soup05',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 31,
        price: 14.99,
        img: 'fish06',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 32,
        price: 16.99,
        img: 'meat06',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 33,
        price: 12.99,
        img: 'pasta06',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 34,
        price: 12.99,
        img: 'pizza06',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 35,
        price: 13.99,
        img: 'salad06',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 36,
        price: 8.99,
        img: 'soup06',
        name: 'Suppe',
        category: 'SUPPEN'
    },
    {
        id: 37,
        price: 17.99,
        img: 'fish07',
        name: 'Fish',
        category: 'FISCH'
    },
    {
        id: 38,
        price: 16.99,
        img: 'meat07',
        name: 'Fleisch',
        category: 'FLEISCH'
    },
    {
        id: 39,
        price: 11.99,
        img: 'pasta07',
        name: 'Pasta',
        category: 'PASTA'
    },
    {
        id: 40,
        price: 10.99,
        img: 'pizza07',
        name: 'Pizza',
        category: 'PIZZA'
    },
    {
        id: 41,
        price: 12.99,
        img: 'salad07',
        name: 'Salat',
        category: 'SALATE'
    },
    {
        id: 42,
        price: 10.99,
        img: 'soup07',
        name: 'Suppe',
        category: 'SUPPEN'
    }

]
export default dataDishes;