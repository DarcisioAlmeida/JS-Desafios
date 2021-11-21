/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por Categoria abaixo, faça os desafios

    - Contar o numero de categorias e o numero de livros em cada categoria
    - Contar o numero de autores
    - Mostrar livros do autor Augusto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros deste autor

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Contar o numero de categorias e o numero de livros em cada categoria
const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// Contar o numero de autores
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) === -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors();

// Mostrar livros do autor Augusto Cury
function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
    console.log("Livros do autor: ", books)
}
booksOfAugustoCury();

//Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros deste autor
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury');
booksOfAuthor('T. Harv Eker');