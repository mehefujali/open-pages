import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFromLocal } from "../../utility/localStore";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PagesReadChart = () => {
      const books = useLoaderData();
      const [readBooksId, setReadBookId] = useState([]);

      useEffect(() => {
            const formLocalId = getFromLocal('read');
            setReadBookId(formLocalId);
      }, []);

      const readBooks = books.filter(book => readBooksId.includes(book.bookId.toString()));

      return (
            <div className=" flex w-full h-full items-start justify-end">
                  <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={readBooks}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="bookName" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="totalPages" fill="#cca97b" />
                        </BarChart>
                  </ResponsiveContainer>
            </div>
      );
};

export default PagesReadChart;
