import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAuthorBooks, fetchBookById } from "../../services/api";
import { BookDetail, BooksData } from "../../types";

const BookView = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookDetail>();
  const [authorBooks, setAuthorBooks] = useState<BooksData[]>([]);

  useEffect(() => {
    const getBookById = async (id?:string) => {
      try{
        const res = await fetchBookById(id);
        setBook(res);
      }catch (error) {
        throw error;
      }
    }
    getBookById(id);
  }, [id]);

  const getAuthorBooks = (name: string) => {
    fetchAuthorBooks(name)
      .then((res) => {
        setAuthorBooks(res);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <>
      {!book ? (
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
        <section className="m-4 py-4 px-8 bg-gray-400 border-0 rounded lg:py-16 lg:m-16 grid lg:grid-cols-2 ">
          <img
            className="h-auto max-w-xs lg:mx-8"
            src={
              book?.volumeInfo.imageLinks && book?.volumeInfo.imageLinks.large
                ? book?.volumeInfo.imageLinks.large
                : "../book.png"
            }
            alt={book?.volumeInfo.title}
            loading="lazy"
          />
          <section className="justify-between space-y-4">
            <b className="text-xl">{book?.volumeInfo.title}</b>
            <h2>Publication Date: {book?.volumeInfo.publishedDate}</h2>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to={book?.volumeInfo.infoLink} target="_blank">
                More Info
              </Link>
            </button>
            <h1>
              Language of book:{" "}
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {book?.volumeInfo.language.toUpperCase()}
              </span>
            </h1>
            <h1>Author : {book?.volumeInfo.authors}</h1>
            <button
              type="button"
              onClick={() => getAuthorBooks(book?.volumeInfo.authors[0])}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              More books written by {book?.volumeInfo.authors}
            </button>
            <section className="grid grid-cols-8 grid-rows-2 gap-2">
              {authorBooks?.map((b: BooksData) => {
                return (
                  <Link to={`/books/${b.id}`} key={b.id}>
                    <img
                      className="h-full max-w-full rounded-lg"
                      src={
                        b?.volumeInfo.imageLinks &&
                        b?.volumeInfo.imageLinks.thumbnail
                          ? b?.volumeInfo.imageLinks.thumbnail
                          : "../book.png"
                      }
                      alt={b?.volumeInfo.title}
                      loading="lazy"
                    />
                  </Link>
                );
              })}
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default BookView;
