import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <nav
        className="flex px-5 py-3 m-8 mt-4 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbs.map(({ breadcrumb, match }, index) => {
            return (
              <li className="inline-flex items-center" key={index}>
                <Link
                  to={match.pathname}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {breadcrumb}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
