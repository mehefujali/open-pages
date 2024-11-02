import { useEffect, useState } from "react";
import { getFromLocal } from "../../utility/localStore";
import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = ({ books }) => {
      const [readBooksId, setReadBookId] = useState([])
      useEffect(() => {
            const formLocalId = getFromLocal('read')
            setReadBookId(formLocalId)

      }, [])
      const readBooks = books.filter(book => readBooksId.includes(book.bookId.toString()))
      return (
            <div>
                  {readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)}
            </div>
      );
};

export default ReadBooks;