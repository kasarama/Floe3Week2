function bookFacade() {
  let books = [
    { id: 100, title: "How to Learn JavaScript - Vol 1", info: "Study hard" },
    { id: 101, title: "How to Learn ES6", info: "Complete all exercises :-)" },
    { id: 102, title: "How to Learn React", info: "Complete all your CA's" },
    { id: 103, title: "How I met your mother", info: "Complete all your CA's" },
    {
      id: 104,
      title: "Learn React",
      info: "Don't drink beer(s), until Friday (after four)",
    },
  ];

  //const[bookList,setBooklist]=useState(books)
  let nextId = 105;
  const getBooks = () => {
    return books;
  };
  const findBook = (id) => {
    const bookId = isNaN(id) ? id : Number(id);
    return books.find((book) => book.id === bookId);
  };
  const deleteBook = (id) => {
   // const bookId = isNaN(id) ? Number(id) : id;
    const myBookID = parseInt(id, 10);
    books = books.filter((book) => book.id !== myBookID);
    console.log(books);
  };
  const addBook = (book) => {
    book.id = nextId;
    books.push(book);
    console.log(books);
    nextId++;
  };
  const editBook = (updatedBook) => {
    let book = findBook(updatedBook.id);
    book.title = updatedBook.title;
    book.info = updatedBook.info;

    console.log("boook edited");
    console.log(books);
  };

  return {
    // Remember all statements below are a shortcut for this version: getBooks: getBooks
    getBooks,
    findBook,
    deleteBook,
    addBook,
    editBook,
  };
}

let returnVal = bookFacade();
export default returnVal;
