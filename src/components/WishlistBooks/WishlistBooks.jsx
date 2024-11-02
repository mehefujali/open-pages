import { useEffect, useState } from "react";
import WishlistBook from "../WishlistBook/WishlistBook";
import { getFromLocal } from "../../utility/localStore";

const WishlistBooks = ({ books }) => {
      const [wishBooksId, setWishBooksId] = useState([])
      useEffect(() => {
            const getLocal = getFromLocal('list')
            setWishBooksId(getLocal)
      }, [])

      const wishBooks = books.filter(book => wishBooksId.includes(book.bookId.toString()))



      return (
            <div>
                  {wishBooks.map(book => <WishlistBook key={book.bookId} book={book}></WishlistBook>)}
            </div>
      );
};

export default WishlistBooks;