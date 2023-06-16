import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/api";
import { BooksData } from "../../types";

const DataTable = () => {
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [booksData, setBooksData] = useState<BooksData[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooksData(res);
      } catch (error) {
        throw error;
      }
    };

    fetchBooks();
  }, []);

// call when user click on the row 

  const onRowSelect = (id: string) => {
    if (!selectedRow.includes(id)) {
      const updatedSelectedRow = [...selectedRow, id];
      setSelectedRow(updatedSelectedRow);
    } else {
      setSelectedRow(selectedRow.filter((newId) => newId !== id));
    }
  };

  return (
    <>
      {booksData.length === 0 ? (
        <svg
          aria-hidden="true"
          className="w-8 h-8 mx-auto my-64 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Authors
              </th>
              <th scope="col" className="px-6 py-3">
                Cover
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              {selectedRow.length > 0 && (
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Preview</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="w-full">
            {booksData.map((book, index) => (
              <tr
                key={book.id}
                onClick={() => onRowSelect(book.id)}
                className={`bg-white border-b dark:bg-gray-800 ${
                  selectedRow.includes(book.id) &&
                  "bg-gray-100 dark:bg-gray-900"
                } dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.volumeInfo.title.length > 50
                    ? book.volumeInfo.title.substring(0, 100) + "..."
                    : book.volumeInfo.title}
                </th>
                <td className="px-6 py-4">
                  {book.volumeInfo.authors?.join(" , ") || "PM"}
                </td>

                <td className="px-6 py-4">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    loading="lazy"
                    alt={book.volumeInfo.title}
                    className="h-24 max-w-xs"
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/books/${book.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
                {selectedRow.includes(book.id) && (
                  <td className="px-6 py-4">
                    <Link
                      to={book.volumeInfo.previewLink}
                      target="_blank"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Preview
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )} 
    </>
  );
};

export default DataTable;
