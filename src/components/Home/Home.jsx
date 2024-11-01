import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
      const books = useLoaderData()
      return (
            <div>
                  <Banner></Banner>
                  <div>
                        <Books books={books}></Books>
                  </div>
            </div>
      );
};

export default Home;