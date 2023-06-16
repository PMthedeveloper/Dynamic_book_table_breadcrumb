import axios from "axios";

const BOOK_API = 'https://www.googleapis.com/books/v1/volumes'

export const getBooks = async () => {
  return await axios
    .get(`${BOOK_API}?q=0'&maxResults=40`)
    .then((res) => res.data.items)
    .catch(() => {
      throw new Error('Failed to fetch books');
    });
};

export const fetchAuthorBooks = async (name?: string) => {
  return await axios
    .get(`${BOOK_API}?q=author:${name}`)
    .then((res) => res.data.items)
    .catch((error) => {
      throw error;
    });
};

export const fetchBookById = async (id?: string) => {
  return await axios
    .get(`${BOOK_API}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
