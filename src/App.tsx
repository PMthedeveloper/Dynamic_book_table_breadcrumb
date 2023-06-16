import BookView from "./components/BookView";
import BreadCrumb from "./components/BreadCrumbs";
import DataTable from "./components/DataTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center py-2">
        📕📕📕Book Hub📕📕📕
      </h1>
      <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-black-700" />
      <BrowserRouter>
        <BreadCrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<DataTable />} />
          <Route path="/books/:id" element={<BookView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
