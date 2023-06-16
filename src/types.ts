export interface BooksData {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    previewLink:string;
    imageLinks: {
      thumbnail?: string;
    };
  };
}
export interface BookDetail {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    infoLink:string;
    language:string;
    publishedDate:string;
    imageLinks: {
        large?: string;
    };
  };
}
