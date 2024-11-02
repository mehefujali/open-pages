import { useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


const Listed = () => {
      const books = useLoaderData()




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
                              <WishlistBooks books={books} ></WishlistBooks>
                        </TabPanel>
                  </Tabs>

            </div>
      );
};

export default Listed;