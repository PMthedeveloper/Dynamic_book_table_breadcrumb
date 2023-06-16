import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-full mt-4">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-64">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          BookHub: Your Ultimate Destination for Literary Delights
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Unlock the Boundless Realm of Imagination and Unforgettable
          Adventures: Embark on a Journey Through Time, Space, and Emotion, as
          BookHub Paves the Way to a Tapestry of Literary Wonders, Unveiling
          Hidden Treasures and Inspiring the Joy of Reading in Every Heart and
          Mind.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/books"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Books List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
