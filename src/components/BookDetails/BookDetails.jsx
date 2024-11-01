import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
      const { bookId } = useParams()
      const books = useLoaderData()
      const book = books.find(book => book.bookId === parseInt(bookId))
      const { bookName, image, author, rating, category, tags, publisher, yearOfPublishing } = book
      return (
            <div>
                  <h1>{bookName}</h1>
            </div>
      );
};

export default BookDetails;