import { useLoaderData, useParams } from "react-router-dom";
import { setItemLocal } from "../../utility/localStore";

const BookDetails = () => {
      const { bookId } = useParams()
      const id = parseInt(bookId)
      const books = useLoaderData()
      const book = books.find(book => book.bookId === id)
      const { bookName, image, author, rating, category, tags, publisher, yearOfPublishing, review, totalPages } = book
      return (
            <div>
                  <div className=" flex ">
                        <div className=" flex flex-col lg:flex-row gap-8 items-center w-fit  border-2 bg-[#cca97b23] p-7 rounded-lg">
                              <div className=" lg:w-2/6">
                                    <img className=" w-96" src={image} alt="" />
                              </div>
                              <div className=" lg:w-2/5  text-md flex flex-col gap-2">
                                    <h1 className=" text-3xl font-bold">{bookName}</h1>
                                    <p>By : {author}</p>
                                    <div className=" border-b"></div>
                                    <p>{category}</p>
                                    <div className=" border-b"></div>
                                    <p>
                                          <span className=" font-bold">Revew : </span>
                                          <span>{review}</span>
                                    </p>
                                    <p className=" flex gap-1">
                                          <span className=" font-bold">Tag : </span>
                                          <span className=" flex gap-2">{tags.map(tag => <p className="bg-[ ] text-[#a07d4f] px-1 rounded-lg w-fit">{tag}</p>)}</span>
                                    </p>
                                    <div className=" border-b"></div>
                                    <p>Number of Pages: {totalPages}</p>
                                    <p>Publisher: {publisher}</p>
                                    <p>Rating: {rating}</p>

                                    <div className=" mt-3 flex gap-1 sm:gap-2 md:gap-4 items-center">
                                          <a className="btn btn-sm md:btn-md text-[#cca97b] btn-outline border-[#cca97b] hover:bg-[#cca97b] hover:border-none hover:text-white"
                                                onClick={() => setItemLocal('read', bookId)}
                                          >Read</a>
                                          <a className="btn btn-sm md:btn-md bg-[#cca97b] hover:bg-[#bb9e79] text-white"
                                                onClick={() => setItemLocal('watch', bookId)}
                                          >Wishlist</a>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BookDetails;