import { fireEvent, render,screen } from "@testing-library/react";
import DataTable from "./index";
import { getBooks } from "../../services/api";

const booksData = [
    {
      id: '1',
      volumeInfo: {
        title: 'Book 1',
        authors: ['Author 1'],
        imageLinks: {
          thumbnail: 'thumbnail_url_1',
        },
      },
    },
    {
      id: '2',
      volumeInfo: {
        title: 'Book 2',
        authors: ['Author 2'],
        imageLinks: {
          thumbnail: 'thumbnail_url_2',
        },
      },
    },
  ];

jest.mock("../../services/api", () => ({
  getBooks: jest.fn(() => Promise.resolve(booksData)),
}));

describe("<DataTable/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render DataTable component", () => {
    expect(() => render(<DataTable />)).not.toThrow();
  });

  it("renders table with book data when booksData is not empty", async () => {
    render(<DataTable />);
    expect(getBooks).toBeCalled();
    // Select the first row
    const book1Row = screen.getByText(booksData[0].volumeInfo.title)
    fireEvent.click(book1Row);
  });

});