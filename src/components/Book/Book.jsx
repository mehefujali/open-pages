
import { FaStar } from "react-icons/fa";
const Book = ({ book }) => {
      const { bookName, image, author, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
      return (
            <div className=" p-7 rounded-xl border-2 border-[#cca97b80] flex flex-col gap-3">
                  <div className="bg-[#cca97b2d] w-full h-full p-8 rounded-xl">
                        <img className=" w-52 h-72 mx-auto" src={image} alt="" />
                  </div>

                  <div className=" flex gap-2">
                        {
                              tags.map(tag => <p className="bg-[#cca97b38] text-[#a07d4f] px-1 rounded-lg">{tag}</p>)
                        }

                  </div>
                  <h1 className=" text-2xl font-semibold">{bookName}</h1>
                  <h1 className=" text-gray-500">By : {author}</h1>
                  <p className=" w-full border-b border-dashed"></p>
                  <div className=" flex items-center  justify-between">
                        <p className=" text-gray-500"> {category}</p>
                        <p className=" flex gap-1 items-center">{rating} <FaStar /></p>
                  </div>


            </div>
      );
};

export default Book;