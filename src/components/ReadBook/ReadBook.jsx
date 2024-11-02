import { Link } from "react-router-dom";
const ReadBook = ({ book }) => {
      const { bookName, image, author, bookId, rating, category, tags, yearOfPublishing, publisher, totalPages } = book

      return (
            <div className=" mt-12">
                  <div className=" flex gap-6 p-5 rounded-lg border-2">
                        <div className=" bg-[#cca97b80] w-fit p-7 rounded-lg">
                              <img className=" w-44" src={image} alt="" />
                        </div>
                        <div className=" flex flex-col gap-3 w-full">
                              <h1 className=" text-2xl font-semibold">{bookName}</h1>
                              <p>By : {author}</p>
                              <div className=" flex gap-2 items-center">
                                    <p className=" flex gap-4"><span className=" font-semibold">Tag:</span>
                                          {
                                                tags.map(tag => <p className="bg-[#cca97b38] text-[#a07d4f] px-1 rounded-lg">{tag}</p>)
                                          }
                                    </p>
                                    <p className=" flex gap-4"><span className=" font-semibold">Year of Publishing: {yearOfPublishing} </span></p>
                              </div>
                              <div className=" flex gap-4">
                                    <p>Publisher: {publisher}</p>
                                    <p>Page: {totalPages}</p>
                              </div>
                              <p>Category : {category}</p>
                              <p>Rating : {rating}</p>
                              <div className=" border-b border w-full"></div>
                              <Link to={`/books/${bookId}`} ><button className=" btn bg-[#ffcb88]">View Details</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default ReadBook;