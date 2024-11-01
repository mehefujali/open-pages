import Book from "../Book/Book";


const Books = ({ books }) => {
      // console.log(books);

      return (
            <div className=" mt-12">
                  <h1 className=" text-center text-5xl font-bold">Books</h1>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                        {
                              books.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                  </div>
            </div>
      );
};

export default Books;