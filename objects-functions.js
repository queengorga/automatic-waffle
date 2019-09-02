let myBook = {
    title: 'A Gentleman in Moscow',
    author: 'Amor Towles',
    pageCount: '462'
}

let otherBook = {
    title: 'The Humans',
    author: 'Matt Haig',
    pageCount: '285'
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} long.`
    }
    console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let OtherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)