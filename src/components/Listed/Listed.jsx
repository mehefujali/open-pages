import { useLoaderData } from "react-router-dom";
import { getFromLocal } from "../../utility/localStore";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../ReadBooks/ReadBooks";

const Listed = () => {
      const books = useLoaderData()


      const listedBooksId = getFromLocal('list')
      const listedBooks = books.filter(listedBook => parseInt(listedBooksId) === listedBook.bookId)
      console.log(listedBooks);

      return (
            <div>
                  <Tabs>
                        <TabList>
                              <Tab>Read Books</Tab>
                              <Tab>Wishlist Books</Tab>
                        </TabList>

                        <TabPanel>
                              <div>
                                    <ReadBooks></ReadBooks>
                              </div>
                        </TabPanel>
                        <TabPanel>
                              <h2>Any content 2</h2>
                        </TabPanel>
                  </Tabs>

            </div>
      );
};

export default Listed;